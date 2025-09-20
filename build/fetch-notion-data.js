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

// Use the existing working server method
async function getJobOpeningsFromServer() {
  try {
    const response = await fetch('http://localhost:5000/api/jobs');
    if (!response.ok) {
      throw new Error(`Server request failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch from server:', error);
    throw error;
  }
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

// Main function to fetch job data from Notion via server
async function fetchJobOpenings() {
  try {
    console.log('🔄 Fetching job openings from Notion via server...');
    
    // Use the working server endpoint
    const jobs = await getJobOpeningsFromServer();
    console.log(`✅ Successfully fetched ${jobs.length} job(s) from Notion database`);
    
    return jobs;
  } catch (error) {
    console.error('❌ Error fetching from server:', error.message);
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