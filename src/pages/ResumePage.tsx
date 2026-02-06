import { useEffect } from "react";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RESUME_URL = "/Jonathan_Tambe_Senior_DevOps_Engineer.pdf";

export default function ResumePage() {
  useEffect(() => {
    document.title = "Resume | Jonathan Tambe - Senior DevOps Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-width py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <a href={RESUME_URL} download>
              <Button variant="hero" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Resume Content */}
      <main className="container-width py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Jonathan Tambe</h1>
              <p className="text-muted-foreground">Senior DevOps Engineer</p>
            </div>
          </div>

          {/* PDF Embed - Microsoft-style document view */}
          <div 
            className="bg-card rounded-2xl border border-border overflow-hidden"
            style={{ boxShadow: 'var(--shadow-lg)' }}
          >
            {/* Document Header Bar */}
            <div className="bg-secondary/50 px-6 py-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>Jonathan_Tambe_Senior_DevOps_Engineer.pdf</span>
              </div>
              <a 
                href={RESUME_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                Open in new tab
              </a>
            </div>

            {/* PDF Viewer */}
            <div className="aspect-[8.5/11] w-full bg-muted">
              <iframe
                src={`${RESUME_URL}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-0"
                title="Resume PDF Viewer"
              />
            </div>
          </div>

          {/* Fallback message */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            If the PDF doesn't load, you can{" "}
            <a 
              href={RESUME_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              view it directly
            </a>{" "}
            or{" "}
            <a href={RESUME_URL} download className="text-primary hover:underline">
              download it
            </a>.
          </p>
        </div>
      </main>
    </div>
  );
}
