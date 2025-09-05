import { Client } from "@notionhq/client";

// Initialize Notion client
export const notion = new Client({
    auth: process.env.NOTION_INTEGRATION_SECRET!,
});

// Extract the page ID from the Notion page URL
function extractPageIdFromUrl(pageUrl: string): string {
    const match = pageUrl.match(/([a-f0-9]{32})(?:[?#]|$)/i);
    if (match && match[1]) {
        return match[1];
    }

    throw Error("Failed to extract page ID");
}

export const NOTION_PAGE_ID = extractPageIdFromUrl(process.env.NOTION_PAGE_URL!);

/**
 * Lists all child databases contained within NOTION_PAGE_ID
 * @returns {Promise<Array<{id: string, title: string}>>} - Array of database objects with id and title
 */
export async function getNotionDatabases() {

    // Array to store the child databases
    const childDatabases = [];

    try {
        // Query all child blocks in the specified page
        let hasMore = true;
        let startCursor: string | undefined = undefined;

        while (hasMore) {
            const response = await notion.blocks.children.list({
                block_id: NOTION_PAGE_ID,
                start_cursor: startCursor,
            });

            // Process the results
            for (const block of response.results) {
                // Check if the block is a child database
                if ('type' in block && block.type === "child_database") {
                    const databaseId = block.id;

                    // Retrieve the database title
                    try {
                        const databaseInfo = await notion.databases.retrieve({
                            database_id: databaseId,
                        });

                        // Add the database to our list
                        childDatabases.push(databaseInfo);
                    } catch (error) {
                        console.error(`Error retrieving database ${databaseId}:`, error);
                    }
                }
            }

            // Check if there are more results to fetch
            hasMore = response.has_more;
            startCursor = response.next_cursor || undefined;
        }

        return childDatabases;
    } catch (error) {
        console.error("Error listing child databases:", error);
        throw error;
    }
}

// Find get a Notion database with the matching title
export async function findDatabaseByTitle(title: string) {
    const databases = await getNotionDatabases();

    for (const db of databases) {
        if ('title' in db && db.title && Array.isArray(db.title) && db.title.length > 0) {
            const dbTitle = db.title[0]?.plain_text?.toLowerCase() || "";
            if (dbTitle === title.toLowerCase()) {
                return db;
            }
        }
    }

    return null;
}

// Create a new database if one with a matching title does not exist
export async function createDatabaseIfNotExists(title: string, properties: any) {
    const existingDb = await findDatabaseByTitle(title);
    if (existingDb) {
        return existingDb;
    }
    return await notion.databases.create({
        parent: {
            type: "page_id",
            page_id: NOTION_PAGE_ID
        },
        title: [
            {
                type: "text",
                text: {
                    content: title
                }
            }
        ],
        properties: properties
    });
}

// Get all job openings from the Notion database
export async function getJobOpenings() {
    try {
        let jobsDatabase = await findDatabaseByTitle("Job Openings");
        
        // If database doesn't exist, create it with sample data
        if (!jobsDatabase) {
            jobsDatabase = await createDatabaseIfNotExists("Job Openings", {
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
                Deadline: { date: {} },
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
            });

            // Add sample job data
            const sampleJobs = [
                {
                    title: "Senior Software Developer",
                    location: "Remote / Dhaka, Bangladesh",
                    type: "Full-time",
                    description: "We're seeking an experienced software developer to join our development team. You'll work on custom software solutions for international clients using modern technologies.",
                    requirements: "5+ years of experience in software development\nStrong proficiency in React, Node.js, and Python\nExperience with cloud platforms (AWS/Azure)\nExcellent problem-solving skills\nStrong communication skills in English",
                    skills: "React, Node.js, Python, AWS, PostgreSQL, Git",
                    benefits: "Competitive salary and performance bonuses\nFlexible working hours and remote work options\nHealth insurance coverage\nProfessional development opportunities",
                    salary: "$40,000 - $60,000 annually",
                    experience: "5+ years",
                    contact: "careers@absouts.com"
                },
                {
                    title: "Cloud Accountant",
                    location: "Remote",
                    type: "Full-time", 
                    description: "Join our accounting team to provide virtual accounting services to US and UK clients. Experience with QuickBooks and cloud accounting platforms required.",
                    requirements: "Bachelor's degree in Accounting or Finance\n3+ years of experience in accounting\nProficiency in QuickBooks, Xero, and Excel\nKnowledge of US/UK tax regulations\nStrong attention to detail",
                    skills: "QuickBooks, Xero, Excel, Tax Preparation, Financial Reporting",
                    benefits: "Competitive compensation package\nWork with international clients\nCareer growth opportunities\nFlexible schedule",
                    salary: "$30,000 - $45,000 annually",
                    experience: "3+ years",
                    contact: "accounting@absouts.com"
                },
                {
                    title: "Digital Marketing Specialist",
                    location: "Dhaka, Bangladesh", 
                    type: "Full-time",
                    description: "Drive our digital marketing efforts across multiple channels. Develop and execute marketing strategies to grow our global client base.",
                    requirements: "Bachelor's degree in Marketing or related field\n2+ years of digital marketing experience\nProficiency in Google Analytics, SEO, and social media\nExcellent written and verbal communication\nCreative thinking and analytical skills",
                    skills: "SEO, Google Analytics, Social Media Marketing, Content Creation, PPC",
                    benefits: "Dynamic work environment\nOpportunities for creativity and innovation\nPerformance-based incentives\nTraining and certification support",
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
        }

        const response = await (notion.databases as any).query({
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
                deadline: properties.Deadline?.date?.start || null
            };
        });
    } catch (error) {
        console.error("Error fetching job openings from Notion:", error);
        throw new Error("Failed to fetch job openings from Notion");
    }
}

// Get a specific job opening by ID
export async function getJobById(id: string) {
    try {
        const formattedId = id.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
        const page = await notion.pages.retrieve({ page_id: formattedId });
        
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
            deadline: properties.Deadline?.date?.start || null
        };
    } catch (error) {
        console.error("Error fetching job by ID from Notion:", error);
        return null;
    }
}