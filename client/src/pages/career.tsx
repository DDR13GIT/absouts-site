import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { JobListing } from "@/components/ui/job-listing";
import { JobApplicationForm } from "@/components/forms/job-application-form";
import { PerksBenefits } from "@/components/ui/perks-benefits";
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
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Join Our Team</span>
            </div>
            
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="career-title">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="career-description">
              Build your career with a global leader in outsourcing solutions. We offer growth opportunities, professional development, and a collaborative work environment.
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Why Choose Us</span>
              </div>
              <h2 className="text-3xl font-bold text-primary" data-testid="why-choose-title">Why Choose Absouts?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={index} className="group text-center p-6 rounded-xl hover:bg-white/70 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid={`why-choose-${reason.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-blue-600 transition-colors duration-300">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Openings */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Current Opportunities</span>
              </div>
              <h2 className="text-3xl font-bold text-primary" data-testid="current-openings-title">Current Openings</h2>
            </div>
            
            <div className="space-y-6">
              {isLoading ? (
                // Loading skeletons
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-8 border-0">
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
          <div className="group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden rounded-xl p-8" data-testid="application-process">
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold text-primary mb-6 text-center group-hover:text-blue-600 transition-colors duration-300 relative z-10">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {applicationProcess.map((step, index) => (
                <div key={index} className="text-center group/step" data-testid={`process-step-${step.number}`}>
                  <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover/step:scale-110 group-hover/step:rotate-3 transition-all duration-300 shadow-lg`}>
                    <span className="text-2xl font-bold text-white group-hover/step:scale-110 transition-transform duration-300">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover/step:text-blue-600 transition-colors duration-300">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PerksBenefits />
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
