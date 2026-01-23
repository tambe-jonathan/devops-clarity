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
              <span className="ml-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                {project.flowSteps.length} Stages
              </span>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              {/* Visual Flow - Vertical for detailed view */}
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block" />
                
                <div className="space-y-4">
                  {project.flowSteps.map((step, index) => {
                    // Determine step category for color coding
                    const isSecurityGate = step.icon.includes('gate') || step.icon === 'trivy';
                    const isSuccess = step.name.includes('Push') || step.name.includes('Deploy') || step.name.includes('Verification');
                    const isStart = index === 0;
                    const isEnd = index === project.flowSteps.length - 1;
                    
                    return (
                      <div 
                        key={index}
                        className={`relative flex gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md group
                          ${isSecurityGate ? 'bg-red-50/50 dark:bg-red-900/10 border border-red-200/50 dark:border-red-800/30' : 
                            isSuccess ? 'bg-green-50/50 dark:bg-green-900/10 border border-green-200/50 dark:border-green-800/30' :
                            isStart || isEnd ? 'bg-primary/5 border border-primary/20' :
                            'bg-secondary/30 border border-border hover:border-primary/30'
                          }`}
                      >
                        {/* Step Number & Logo */}
                        <div className="flex-shrink-0 relative z-10">
                          <div className="relative">
                            <ToolLogo tool={step.icon} size="md" />
                            <span className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md
                              ${isSecurityGate ? 'bg-red-500 text-white' : 
                                isSuccess ? 'bg-green-500 text-white' :
                                'bg-primary text-primary-foreground'
                              }`}>
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        
                        {/* Step Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground">
                              {step.name}
                            </h3>
                            {isSecurityGate && (
                              <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
                                Security Gate
                              </span>
                            )}
                            {isSuccess && (
                              <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium rounded-full">
                                Success Path
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        
                        {/* Arrow indicator */}
                        {index < project.flowSteps.length - 1 && (
                          <div className="absolute -bottom-4 left-6 z-20 hidden md:flex items-center justify-center">
                            <div className="w-4 h-4 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                              <ArrowRight className="w-2 h-2 text-primary rotate-90" />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
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
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
