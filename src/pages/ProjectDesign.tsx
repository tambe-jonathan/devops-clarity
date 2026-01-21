import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Folder, File, CheckCircle2, Target, Wrench, GitBranch, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ToolLogo } from "@/components/ToolLogo";
import { getProjectDesignBySlug } from "@/data/projectDesigns";

export default function ProjectDesign() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectDesignBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReturnToProjects = () => {
    sessionStorage.setItem('restore_scroll', 'true');
    navigate('/');
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Projects", href: "/#projects" },
    { label: project.title }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={handleReturnToProjects}
            className="mb-8 hover:bg-secondary transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Projects
          </Button>

          {/* Header */}
          <div className="mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Project Design
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {project.tagline}
            </p>
          </div>

          {/* Case Study Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Case Study</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">1</span>
                  <h3 className="font-semibold text-foreground">The Problem</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">2</span>
                  <h3 className="font-semibold text-foreground">The Solution</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">3</span>
                  <h3 className="font-semibold text-foreground">The Approach</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.caseStudy.approach}
                </p>
              </div>
            </div>
          </section>

          {/* Pipeline Flow Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GitBranch className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Pipeline Flow</h2>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max">
                {project.flowSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex flex-col items-center group">
                      <div className="relative">
                        <ToolLogo tool={step.icon} size="lg" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div className="mt-3 text-center max-w-[100px]">
                        <p className="text-sm font-medium text-foreground">{step.name}</p>
                        <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {index < project.flowSteps.length - 1 && (
                      <div className="flex items-center px-4 pb-10">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-primary/50 to-primary"></div>
                        <ArrowRight className="w-5 h-5 text-primary -ml-1" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Outcomes Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Outcomes & Metrics</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.outcomes.map((outcome, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-card to-secondary/20 border border-border rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {outcome.value}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {outcome.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {outcome.description}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Two Column Layout: Project Structure & Tools */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Structure */}
            <section className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Folder className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Project Structure</h2>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 font-mono text-sm">
                <div className="space-y-2">
                  {project.projectStructure.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-2 py-1 px-2 rounded hover:bg-secondary/50 transition-colors group">
                        {item.type === "folder" ? (
                          <Folder className="w-4 h-4 text-amber-500" />
                        ) : (
                          <File className="w-4 h-4 text-blue-500" />
                        )}
                        <span className="text-foreground font-medium">{item.name}</span>
                        {item.description && (
                          <span className="text-muted-foreground text-xs ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            — {item.description}
                          </span>
                        )}
                      </div>
                      
                      {item.children && (
                        <div className="ml-6 border-l-2 border-border pl-4 space-y-1">
                          {item.children.map((child, childIndex) => (
                            <div 
                              key={childIndex}
                              className="flex items-center gap-2 py-1 px-2 rounded hover:bg-secondary/50 transition-colors group"
                            >
                              {child.type === "folder" ? (
                                <Folder className="w-4 h-4 text-amber-500/70" />
                              ) : (
                                <File className="w-4 h-4 text-blue-500/70" />
                              )}
                              <span className="text-muted-foreground">{child.name}</span>
                              {child.description && (
                                <span className="text-muted-foreground/60 text-xs ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                  — {child.description}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tools & Technologies */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Tools Used</h2>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4">
                  {project.tools.map((tool, index) => (
                    <div 
                      key={index}
                      className="group cursor-default"
                    >
                      <ToolLogo tool={tool.logo} size="md" showName />
                      <div className="text-center mt-1">
                        <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                          {tool.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link 
                    to={`/project/${slug}/screenshots`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      View Execution Screenshots
                    </span>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleReturnToProjects}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
