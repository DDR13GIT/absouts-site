import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { JobListing } from "@/components/ui/job-listing";
import { JobApplicationForm } from "@/components/forms/job-application-form";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingUp, Globe, Users } from "lucide-react";

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  postedDate: string;
  description: string;
  skills: string[];
}

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<{ id: string; title: string } | null>(null);

  const { data: jobs, isLoading, error } = useQuery<Job[]>({
    queryKey: ["/api/jobs"],
  });

  const handleApplyJob = (jobId: string, jobTitle: string) => {
    setSelectedJob({ id: jobId, title: jobTitle });
  };

  const closeJobApplication = () => {
    setSelectedJob(null);
  };

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Career advancement paths with continuous learning and professional development programs."
    },
    {
      icon: Globe,
      title: "Global Exposure", 
      description: "Work with international clients and gain exposure to diverse markets and technologies."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work in a supportive environment that values teamwork, innovation, and excellence."
    }
  ];

  const applicationProcess = [
    {
      number: 1,
      title: "Apply Online",
      description: "Submit your application through our online form",
      bgColor: "bg-accent"
    },
    {
      number: 2, 
      title: "Initial Review",
      description: "Our HR team reviews your qualifications",
      bgColor: "bg-primary"
    },
    {
      number: 3,
      title: "Interview", 
      description: "Technical and cultural fit assessment",
      bgColor: "bg-secondary"
    },
    {
      number: 4,
      title: "Welcome",
      description: "Onboarding and team integration",
      bgColor: "bg-accent"
    }
  ];

  if (error) {
    return (
      <div className="pt-16" data-testid="career-page-error">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-destructive mb-4">Error Loading Careers</h1>
            <p className="text-muted-foreground">Failed to load job listings. Please try again later.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16" data-testid="career-page">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="career-title">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="career-description">
              Build your career with a global leader in outsourcing solutions. We offer growth opportunities, professional development, and a collaborative work environment.
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-12" data-testid="why-choose-title">Why Choose Absouts?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={index} className="text-center" data-testid={`why-choose-${reason.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Openings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8" data-testid="current-openings-title">Current Openings</h2>
            <div className="space-y-6">
              {isLoading ? (
                // Loading skeletons
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-border">
                    <Skeleton className="h-8 w-64 mb-4" />
                    <div className="flex gap-4 mb-4">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-36" />
                    </div>
                    <Skeleton className="h-20 w-full mb-4" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-18" />
                    </div>
                  </div>
                ))
              ) : jobs && jobs.length > 0 ? (
                jobs.map((job) => (
                  <JobListing
                    key={job.id}
                    job={job}
                    onApply={handleApplyJob}
                  />
                ))
              ) : (
                <div className="text-center py-12" data-testid="no-jobs-message">
                  <p className="text-muted-foreground text-lg">No current job openings available. Please check back later.</p>
                </div>
              )}
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-muted rounded-xl p-8" data-testid="application-process">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {applicationProcess.map((step, index) => (
                <div key={index} className="text-center" data-testid={`process-step-${step.number}`}>
                  <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {selectedJob && (
        <JobApplicationForm
          jobId={selectedJob.id}
          jobTitle={selectedJob.title}
          isOpen={!!selectedJob}
          onClose={closeJobApplication}
        />
      )}
    </div>
  );
}
