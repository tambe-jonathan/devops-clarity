import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Layers, Lightbulb, Cog, Wrench, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getArchitectureBySlug } from "@/data/architectures";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ArchitectureDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const architecture = slug ? getArchitectureBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleReturnToPortfolio = () => {
    sessionStorage.setItem('restore_scroll', 'true');
    navigate('/');
  };

  if (!architecture) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Architecture not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container-width section-padding">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { label: "Architecture", href: "/#architecture" },
              { label: architecture.title }
            ]}
          />

          {/* Back Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReturnToPortfolio}
            className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Portfolio
          </Button>

          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {architecture.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {architecture.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {architecture.description}
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-border bg-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img 
              src={architecture.image} 
              alt={`${architecture.title} diagram`}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Purpose Section */}
              <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Purpose</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-[52px]">
                  {architecture.purpose}
                </p>
              </section>

              {/* Design Rationale Section */}
              <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Why This Design</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-[52px]">
                  {architecture.designRationale}
                </p>
              </section>

              {/* How It Works Section */}
              <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Cog className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">How It Works</h2>
                </div>
                <ol className="space-y-3 pl-[52px]">
                  {architecture.howItWorks.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Trade-offs Section */}
              {architecture.tradeoffs && architecture.tradeoffs.length > 0 && (
                <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Trade-offs</h2>
                  </div>
                  <ul className="space-y-3 pl-[52px]">
                    {architecture.tradeoffs.map((tradeoff, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                        <span className="text-muted-foreground">{tradeoff}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Components Card */}
              <div className="rounded-2xl border border-border bg-card p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Key Components</h3>
                </div>
                <ul className="space-y-2">
                  {architecture.components.map((component, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                      {component}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Card */}
              <div className="rounded-2xl border border-border bg-card p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Tools & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {architecture.tools.map((tool, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Return Button */}
              <Button
                onClick={handleReturnToPortfolio}
                className="w-full"
                variant="outline"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Portfolio
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
