#!/usr/bin/env node

/**
 * Build-time script to fetch job openings from Notion database
 * and save them as static JSON for the client to consume
 */

import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the Replit integration authentication method
async function getUncachableNotionClient() {
  const { Client } = await import('@notionhq/client');
  
  let connectionSettings;

  async function getAccessToken() {
    if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
      return connectionSettings.settings.access_token;
    }
    
    const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
    const xReplitToken = process.env.REPL_IDENTITY 
      ? 'repl ' + process.env.REPL_IDENTITY 
      : process.env.WEB_REPL_RENEWAL 
      ? 'depl ' + process.env.WEB_REPL_RENEWAL 
      : null;

    if (!xReplitToken) {
      throw new Error('X_REPLIT_TOKEN not found for repl/depl');
    }

    connectionSettings = await fetch(
      'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=notion',
      {
        headers: {
          'Accept': 'application/json',
          'X_REPLIT_TOKEN': xReplitToken
        }
      }
    ).then(res => res.json()).then(data => data.items?.[0]);

    const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

    if (!connectionSettings || !accessToken) {
      throw new Error('Notion not connected');
    }
    return accessToken;
  }

  const accessToken = await getAccessToken();
  return new Client({ auth: accessToken });
}

// Extract page ID from Notion URL
function extractPageIdFromUrl(pageUrl) {
  const patterns = [
    /([a-f0-9]{32})(?:[?#]|$)/i,           // 32 char hex without dashes
    /([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i  // UUID format with dashes
  ];
  
  for (const pattern of patterns) {
    const match = pageUrl.match(pattern);
    if (match && match[1]) {
      return match[1].replace(/-/g, '');
    }
  }

  throw Error("Failed to extract page ID from URL. Please ensure you're using a valid Notion page URL.");
}

// Main function to fetch job data from Notion
async function fetchJobOpenings() {
  try {
    console.log('🔄 Fetching job openings from Notion...');
    
    const notion = await getUncachableNotionClient();
    
    // Get the page/database ID from environment (you'll need to set this)
    const notionPageUrl = process.env.NOTION_PAGE_URL || process.env.NOTION_DATABASE_URL;
    
    if (!notionPageUrl) {
      console.log('⚠️  No Notion page URL found. Using fallback static data.');
      return getFallbackJobData();
    }

    const pageId = extractPageIdFromUrl(notionPageUrl);
    console.log('📋 Using Notion page/database ID:', pageId);

    // First try to treat it as a database
    try {
      const formattedId = pageId.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
      
      const targetDatabase = await notion.databases.retrieve({ database_id: formattedId });
      console.log('✅ Found database:', targetDatabase.id);
      
      // Query the database
      const response = await fetch(`https://api.notion.com/v1/databases/${formattedId}/query`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${(await getUncachableNotionClient()).auth}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28'
        },
        body: JSON.stringify({
          filter: {
            property: "Status",
            select: {
              equals: "Open"
            }
          },
          page_size: 100
        })
      });
      
      if (!response.ok) {
        throw new Error(`Failed to query database: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log(`📊 Found ${data.results.length} job records in database`);
      
      return data.results.map((page) => {
        const properties = page.properties;
        
        const getTextContent = (prop) => {
          if (prop?.title) return prop.title[0]?.plain_text || "";
          if (prop?.rich_text) return prop.rich_text[0]?.plain_text || "";
          if (prop?.select) return prop.select.name || "";
          return "";
        };
        
        return {
          id: page.id.replace(/-/g, ''),
          title: getTextContent(properties.Title) || "Untitled Position",
          location: getTextContent(properties.Location) || "Remote",
          type: getTextContent(properties.Type) || "Full-time",
          postedDate: page.created_time.split('T')[0],
          description: getTextContent(properties.Description) || "",
          requirements: getTextContent(properties.Requirements) || "",
          skills: getTextContent(properties.Skills)?.split(', ') || [],
          benefits: getTextContent(properties.Benefits) || "",
          salary: getTextContent(properties.Salary) || "",
          experience: getTextContent(properties.Experience) || "",
          contact: getTextContent(properties.Contact) || "careers@absouts.com",
          deadline: properties.Deadline?.date?.start || null
        };
      });
    } catch (dbError) {
      console.log('ℹ️  Not a database, trying as page...');
      
      // If not a database, return fallback data for now
      console.log('⚠️  Page-based setup not implemented in build script. Using fallback data.');
      return getFallbackJobData();
    }
  } catch (error) {
    console.error('❌ Error fetching from Notion:', error.message);
    console.log('📋 Using fallback static data');
    return getFallbackJobData();
  }
}

// Fallback job data when Notion is not available
function getFallbackJobData() {
  return [
    {
      id: "senior-developer",
      title: "Senior Software Developer",
      location: "Remote / Dhaka, Bangladesh",
      type: "Full-time",
      postedDate: new Date().toISOString().split('T')[0],
      description: "We're seeking an experienced software developer to join our development team. You'll work on custom software solutions for international clients using modern technologies.",
      requirements: "5+ years of experience in software development\nStrong proficiency in React, Node.js, and Python\nExperience with cloud platforms (AWS/Azure)\nExcellent problem-solving skills\nStrong communication skills in English",
      skills: ["React", "Node.js", "Python", "AWS", "PostgreSQL", "Git"],
      benefits: "Competitive salary and performance bonuses\nFlexible working hours and remote work options\nHealth insurance coverage\nProfessional development opportunities",
      salary: "$40,000 - $60,000 annually",
      experience: "5+ years",
      contact: "careers@absouts.com",
      deadline: null
    },
    {
      id: "cloud-accountant",
      title: "Cloud Accountant",
      location: "Remote",
      type: "Full-time",
      postedDate: new Date().toISOString().split('T')[0],
      description: "Join our accounting team to provide virtual accounting services to US and UK clients. Experience with QuickBooks and cloud accounting platforms required.",
      requirements: "Bachelor's degree in Accounting or Finance\n3+ years of experience in accounting\nProficiency in QuickBooks, Xero, and Excel\nKnowledge of US/UK tax regulations\nStrong attention to detail",
      skills: ["QuickBooks", "Xero", "Excel", "Tax Preparation", "Financial Reporting"],
      benefits: "Competitive compensation package\nWork with international clients\nCareer growth opportunities\nFlexible schedule",
      salary: "$30,000 - $45,000 annually",
      experience: "3+ years",
      contact: "accounting@absouts.com",
      deadline: null
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Specialist",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      postedDate: new Date().toISOString().split('T')[0],
      description: "Drive our digital marketing efforts across multiple channels. Develop and execute marketing strategies to grow our global client base.",
      requirements: "Bachelor's degree in Marketing or related field\n2+ years of digital marketing experience\nProficiency in Google Analytics, SEO, and social media\nExcellent written and verbal communication\nCreative thinking and analytical skills",
      skills: ["SEO", "Google Analytics", "Social Media Marketing", "Content Creation", "PPC"],
      benefits: "Dynamic work environment\nOpportunities for creativity and innovation\nPerformance-based incentives\nTraining and certification support",
      salary: "$25,000 - $35,000 annually",
      experience: "2+ years",
      contact: "marketing@absouts.com",
      deadline: null
    }
  ];
}

// Main execution
async function main() {
  try {
    console.log('🚀 Starting Notion data fetch for build...');
    
    const jobs = await fetchJobOpenings();
    
    // Create the output directory
    const outputDir = join(__dirname, '..', 'client', 'public');
    await mkdir(outputDir, { recursive: true });
    
    // Create the JSON data object
    const notionData = {
      jobs,
      lastUpdated: new Date().toISOString(),
      totalJobs: jobs.length
    };
    
    // Write to JSON file
    const outputPath = join(outputDir, 'notion-data.json');
    await writeFile(outputPath, JSON.stringify(notionData, null, 2), 'utf-8');
    
    console.log(`✅ Successfully wrote ${jobs.length} job(s) to notion-data.json`);
    console.log(`📁 File saved to: ${outputPath}`);
    console.log('🎉 Build-time data fetch completed!');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Run the script
main();