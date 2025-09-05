import { Client } from "@notionhq/client";

// Initialize Notion client
export const notion = new Client({
    auth: process.env.NOTION_INTEGRATION_SECRET!,
});

// Extract the page ID from the Notion page URL
function extractPageIdFromUrl(pageUrl: string): string {
    // Handle various Notion URL formats
    const patterns = [
        /([a-f0-9]{32})(?:[?#]|$)/i,           // 32 char hex without dashes
        /([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i  // UUID format with dashes
    ];
    
    for (const pattern of patterns) {
        const match = pageUrl.match(pattern);
        if (match && match[1]) {
            // Remove dashes if present and return clean ID
            return match[1].replace(/-/g, '');
        }
    }

    throw Error("Failed to extract page ID from URL. Please ensure you're using a valid Notion page URL.");
}

export const NOTION_PAGE_ID = extractPageIdFromUrl(process.env.NOTION_PAGE_URL!);

// Get all job openings from the Notion database
export async function getJobOpenings() {
    try {
        console.log("Checking NOTION_PAGE_ID:", NOTION_PAGE_ID);
        
        // First try to treat it as a database
        try {
            const targetDatabase = await notion.databases.retrieve({ database_id: NOTION_PAGE_ID });
            console.log("Target is a database:", targetDatabase.id);
            
            // If it's already a database, query it directly and return the results
            const response = await (notion as any).databases.query({
                database_id: NOTION_PAGE_ID,
                page_size: 100
            });
            
            console.log("Found", response.results.length, "job records in database");
            
            return response.results.map((page: any) => {
                const properties = page.properties;
                
                const getTextContent = (prop: any) => {
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
                    deadline: (properties.Deadline as any)?.date?.start || null
                };
            });
        } catch (dbError) {
            console.log("Not a database, checking if it's a page...", dbError);
            
            // Try to treat it as a page
            try {
                const targetPage = await notion.pages.retrieve({ page_id: NOTION_PAGE_ID });
                console.log("Target is a page:", targetPage.id);
                console.log("Creating database under this page...");
                
                // Create a job database under this page
                const jobsDatabase = await notion.databases.create({
                    parent: {
                        type: "page_id",
                        page_id: NOTION_PAGE_ID
                    },
                    title: [
                        {
                            type: "text",
                            text: {
                                content: "Job Openings"
                            }
                        }
                    ],
                    properties: {
                        Title: { title: {} },
                        Location: { rich_text: {} },
                        Type: { 
                            select: {
                                options: [
                                    { name: "Full-time", color: "blue" },
                                    { name: "Part-time", color: "green" },
                                    { name: "Contract", color: "orange" },
                                    { name: "Remote", color: "purple" }
                                ]
                            }
                        },
                        Description: { rich_text: {} },
                        Requirements: { rich_text: {} },
                        Skills: { rich_text: {} },
                        Benefits: { rich_text: {} },
                        Salary: { rich_text: {} },
                        Experience: { rich_text: {} },
                        Contact: { rich_text: {} },
                        Status: {
                            select: {
                                options: [
                                    { name: "Open", color: "green" },
                                    { name: "Closed", color: "red" },
                                    { name: "Draft", color: "gray" }
                                ]
                            }
                        }
                    }
                });

                // Add sample job data
                const sampleJobs = [
                    {
                        title: "Senior Software Developer",
                        location: "Remote / Dhaka, Bangladesh",
                        type: "Full-time",
                        description: "We're seeking an experienced software developer to join our development team. You'll work on custom software solutions for international clients using modern technologies.",
                        requirements: "5+ years of experience in software development\\nStrong proficiency in React, Node.js, and Python\\nExperience with cloud platforms (AWS/Azure)\\nExcellent problem-solving skills\\nStrong communication skills in English",
                        skills: "React, Node.js, Python, AWS, PostgreSQL, Git",
                        benefits: "Competitive salary and performance bonuses\\nFlexible working hours and remote work options\\nHealth insurance coverage\\nProfessional development opportunities",
                        salary: "$40,000 - $60,000 annually",
                        experience: "5+ years",
                        contact: "careers@absouts.com"
                    },
                    {
                        title: "Cloud Accountant",
                        location: "Remote",
                        type: "Full-time", 
                        description: "Join our accounting team to provide virtual accounting services to US and UK clients. Experience with QuickBooks and cloud accounting platforms required.",
                        requirements: "Bachelor's degree in Accounting or Finance\\n3+ years of experience in accounting\\nProficiency in QuickBooks, Xero, and Excel\\nKnowledge of US/UK tax regulations\\nStrong attention to detail",
                        skills: "QuickBooks, Xero, Excel, Tax Preparation, Financial Reporting",
                        benefits: "Competitive compensation package\\nWork with international clients\\nCareer growth opportunities\\nFlexible schedule",
                        salary: "$30,000 - $45,000 annually",
                        experience: "3+ years",
                        contact: "accounting@absouts.com"
                    },
                    {
                        title: "Digital Marketing Specialist",
                        location: "Dhaka, Bangladesh", 
                        type: "Full-time",
                        description: "Drive our digital marketing efforts across multiple channels. Develop and execute marketing strategies to grow our global client base.",
                        requirements: "Bachelor's degree in Marketing or related field\\n2+ years of digital marketing experience\\nProficiency in Google Analytics, SEO, and social media\\nExcellent written and verbal communication\\nCreative thinking and analytical skills",
                        skills: "SEO, Google Analytics, Social Media Marketing, Content Creation, PPC",
                        benefits: "Dynamic work environment\\nOpportunities for creativity and innovation\\nPerformance-based incentives\\nTraining and certification support",
                        salary: "$25,000 - $35,000 annually",
                        experience: "2+ years",
                        contact: "marketing@absouts.com"
                    }
                ];

                for (const job of sampleJobs) {
                    await notion.pages.create({
                        parent: { database_id: jobsDatabase.id },
                        properties: {
                            Title: {
                                title: [{ text: { content: job.title } }]
                            },
                            Location: {
                                rich_text: [{ text: { content: job.location } }]
                            },
                            Type: {
                                select: { name: job.type }
                            },
                            Description: {
                                rich_text: [{ text: { content: job.description } }]
                            },
                            Requirements: {
                                rich_text: [{ text: { content: job.requirements } }]
                            },
                            Skills: {
                                rich_text: [{ text: { content: job.skills } }]
                            },
                            Benefits: {
                                rich_text: [{ text: { content: job.benefits } }]
                            },
                            Salary: {
                                rich_text: [{ text: { content: job.salary } }]
                            },
                            Experience: {
                                rich_text: [{ text: { content: job.experience } }]
                            },
                            Contact: {
                                rich_text: [{ text: { content: job.contact } }]
                            },
                            Status: {
                                select: { name: "Open" }
                            }
                        }
                    });
                }

                // Now query the created database
                const response = await (notion as any).databases.query({
                    database_id: jobsDatabase.id,
                    filter: {
                        property: "Status",
                        select: {
                            equals: "Open"
                        }
                    }
                });

                return response.results.map((page: any) => {
                    const properties = page.properties;
                    
                    const getTextContent = (prop: any) => {
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
                        deadline: (properties.Deadline as any)?.date?.start || null
                    };
                });
            } catch (pageError) {
                console.error("Page error:", pageError);
                throw new Error(`Could not access Notion object with ID ${NOTION_PAGE_ID}. Please ensure the URL is correct and the integration has access.`);
            }
        }
    } catch (error) {
        console.error("Error fetching job openings from Notion:", error);
        throw new Error("Failed to fetch job openings from Notion");
    }
}

// Get a specific job opening by ID
export async function getJobById(id: string) {
    try {
        // Try different ID formats
        let pageId = id;
        if (id.length === 32 && !id.includes('-')) {
            pageId = id.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
        }
        
        const page = await notion.pages.retrieve({ page_id: pageId });
        
        if (!page || !('properties' in page)) {
            return null;
        }

        const properties = page.properties;
        
        const getTextContent = (prop: any) => {
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
            deadline: (properties.Deadline as any)?.date?.start || null
        };
    } catch (error) {
        console.error("Error fetching job by ID from Notion:", error);
        return null;
    }
}