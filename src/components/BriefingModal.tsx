import { X, Play, Clock, Gauge, CheckCircle2, AlertTriangle, FileText, ArrowRight } from "lucide-react";
import { Briefing, stateColors } from "@/data/briefings";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface BriefingModalProps {
  briefing: Briefing | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BriefingModal({ briefing, isOpen, onClose }: BriefingModalProps) {
  if (!briefing) return null;

  const stateStyle = stateColors[briefing.state];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 gap-0">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border bg-background">
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide ${stateStyle.bg} ${stateStyle.text} border ${stateStyle.border}`}>
              [{briefing.state}]
            </span>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {briefing.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Gauge className="w-4 h-4" />
                {briefing.complexity}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-0">
          {/* Left Side - Video Player */}
          <div className="lg:col-span-3 p-6">
            <div className="relative aspect-video bg-gradient-to-br from-secondary to-muted rounded-xl overflow-hidden mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-primary/25">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                  <p className="text-muted-foreground text-sm">Video briefing coming soon</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              {briefing.title}
            </h2>
            
            {/* Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {briefing.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Sidebar */}
          <div className="lg:col-span-2 bg-muted/30 p-6 border-l border-border space-y-6">
            {/* Problem Statement */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                  Problem Statement
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {briefing.problemStatement}
              </p>
            </div>

            {/* Architecture Diagram Placeholder */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-blue-500" />
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                  Architecture Diagram
                </h3>
              </div>
              <div className="aspect-[4/3] bg-secondary/50 rounded-lg border border-dashed border-border flex items-center justify-center">
                <p className="text-xs text-muted-foreground">Architecture visualization</p>
              </div>
            </div>

            {/* Key Results */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                  Key Results
                </h3>
              </div>
              <ul className="space-y-2">
                {briefing.keyResults.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="border-t border-border bg-gradient-to-r from-primary/5 to-accent/5 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-foreground font-semibold text-lg">
                Facing a similar architectural challenge?
              </p>
              <p className="text-muted-foreground text-sm">
                Let's discuss your infrastructure strategy.
              </p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <a href="#contact" onClick={onClose} className="gap-2">
                Book a Strategy Session
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
