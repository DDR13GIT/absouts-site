import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertJobApplicationSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure Gmail transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.GMAIL_PASSWORD || process.env.EMAIL_PASSWORD || 'your-app-password'
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store in database
      const submission = await storage.createContactSubmission(validatedData);

      // Send email notification
      const mailOptions = {
        from: process.env.GMAIL_USER || 'noreply@absouts.com',
        to: 'info@absouts.com',
        subject: `New Contact Form Submission from ${validatedData.firstName} ${validatedData.lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${validatedData.serviceInterest || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `
      };

      await transporter.sendMail(mailOptions);

      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: submission.id 
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit contact form",
        error: errorMessage 
      });
    }
  });

  // Job application submission
  app.post("/api/job-applications", async (req, res) => {
    try {
      const validatedData = insertJobApplicationSchema.parse(req.body);
      
      // Store in database
      const application = await storage.createJobApplication(validatedData);

      // Send email notification
      const mailOptions = {
        from: process.env.GMAIL_USER || 'noreply@absouts.com',
        to: 'careers@absouts.com',
        subject: `New Job Application for ${validatedData.jobId}`,
        html: `
          <h2>New Job Application</h2>
          <p><strong>Position:</strong> ${validatedData.jobId}</p>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Experience:</strong> ${validatedData.experience}</p>
          <p><strong>Resume:</strong> ${validatedData.resumeUrl}</p>
          <p><strong>Cover Letter:</strong></p>
          <p>${validatedData.coverLetter || 'Not provided'}</p>
        `
      };

      await transporter.sendMail(mailOptions);

      res.status(201).json({ 
        success: true, 
        message: "Job application submitted successfully",
        id: application.id 
      });
    } catch (error) {
      console.error("Job application submission error:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit job application",
        error: errorMessage 
      });
    }
  });

  // Get job listings
  app.get("/api/jobs", async (req, res) => {
    try {
      const { getJobOpenings } = await import("./notion");
      const jobs = await getJobOpenings();
      res.json(jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      // Fallback to static data if Notion fails
      const jobs = [
        {
          id: "senior-developer",
          title: "Senior Software Developer",
          location: "Remote / Dhaka",
          type: "Full-time",
          postedDate: "2024-01-03",
          description: "We're seeking an experienced software developer to join our development team. You'll work on custom software solutions for international clients using modern technologies.",
          skills: ["React", "Node.js", "Python", "AWS"]
        },
        {
          id: "cloud-accountant",
          title: "Cloud Accountant",
          location: "Remote",
          type: "Full-time",
          postedDate: "2024-01-01",
          description: "Join our accounting team to provide virtual accounting services to US and UK clients. Experience with QuickBooks and cloud accounting platforms required.",
          skills: ["QuickBooks", "Xero", "Excel", "Tax Preparation"]
        },
        {
          id: "business-development",
          title: "Business Development Executive",
          location: "Dhaka",
          type: "Full-time",
          postedDate: "2024-01-02",
          description: "Drive business growth by identifying new opportunities and building relationships with potential clients across global markets.",
          skills: ["Sales", "Client Relations", "CRM", "Lead Generation"]
        }
      ];

      res.json(jobs);
    }
  });

  // Get specific job by ID
  app.get("/api/jobs/:id", async (req, res) => {
    try {
      const { getJobById } = await import("./notion");
      const job = await getJobById(req.params.id);
      
      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }
      
      res.json(job);
    } catch (error) {
      console.error("Error fetching job by ID:", error);
      res.status(500).json({ error: "Failed to fetch job details" });
    }
  });

  // File upload endpoint for job applications
  app.post("/api/upload-resume", async (req, res) => {
    try {
      // In a real implementation, this would handle file upload to cloud storage
      // For now, return a mock URL
      const mockUrl = `https://storage.example.com/resumes/${Date.now()}-resume.pdf`;
      
      res.json({ 
        success: true, 
        url: mockUrl 
      });
    } catch (error) {
      console.error("Resume upload error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to upload resume" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
