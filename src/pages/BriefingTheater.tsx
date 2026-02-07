import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { 
  ArrowLeft, 
  ExternalLink, 
  Download, 
  Copy, 
  Check, 
  Clock, 
  Gauge, 
  Calendar,
  ChevronRight
} from "lucide-react";
import { briefings, stateColors, Briefing, BriefingChapter } from "@/data/briefings";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ToolLogo } from "@/components/ToolLogo";

export default function BriefingTheater() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeChapter, setActiveChapter] = useState<string>("0");
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const briefing = briefings.find((b) => b.slug === slug);

  // Scroll restoration is handled globally in App.tsx

  if (!briefing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Briefing not found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  const colors = stateColors[briefing.state];

  const copyToClipboard = (code: string, chapterIndex: number) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(`${chapterIndex}`);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container-width pt-24 pb-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/#briefings" className="hover:text-foreground transition-colors">Briefings</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground truncate max-w-[200px]">{briefing.title}</span>
        </nav>
      </div>

      {/* Theater Layout */}
      <main className="container-width pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          
          {/* Left Column - Video Player */}
          <div className="space-y-6">
            {/* Video Container */}
            <div className="relative aspect-video bg-foreground/5 rounded-xl overflow-hidden border border-border">
              {briefing.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${briefing.youtubeId}?rel=0&modestbranding=1`}
                  title={briefing.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-medium">Video briefing coming soon</p>
                    <p className="text-sm mt-1">Read the chapters below for full details</p>
                  </div>
                </div>
              )}
              
              {/* YouTube Link Overlay */}
              {briefing.youtubeId && (
                <a 
                  href={`https://youtube.com/watch?v=${briefing.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-foreground/80 text-background rounded-full text-sm font-medium hover:bg-foreground transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Watch on YouTube
                </a>
              )}
            </div>

            {/* Video Meta */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Badge className={`${colors.bg} ${colors.text} ${colors.border} border`}>
                  [{briefing.state}]
                </Badge>
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
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                {briefing.title}
              </h1>
              <p className="text-muted-foreground">{briefing.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                {briefing.stack.map((tool) => (
                  <div 
                    key={tool}
                    className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-lg border border-border/50"
                  >
                    <ToolLogo tool={tool} className="w-4 h-4" />
                    <span className="text-sm font-medium text-foreground">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {briefing.downloadPdf && (
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Architecture PDF
                </Button>
              )}
            </div>

            {/* Chapters Accordion - Mobile Visible */}
            <div className="lg:hidden">
              <ChapterAccordion 
                chapters={briefing.chapters}
                activeChapter={activeChapter}
                setActiveChapter={setActiveChapter}
                copiedSnippet={copiedSnippet}
                onCopy={copyToClipboard}
              />
            </div>

            {/* Interactive Terminal Snippets */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Copy-Pasteable Solutions</h3>
              <div className="space-y-4">
                {briefing.chapters
                  .filter((ch) => ch.codeSnippet)
                  .map((chapter, idx) => (
                    <div key={idx} className="rounded-lg border border-border overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-secondary/50 border-b border-border">
                        <span className="text-sm font-medium text-foreground">{chapter.title}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground px-2 py-0.5 bg-background rounded">
                            {chapter.codeSnippet?.language}
                          </span>
                          <button
                            onClick={() => copyToClipboard(chapter.codeSnippet!.code, idx)}
                            className="p-1.5 hover:bg-background rounded transition-colors"
                          >
                            {copiedSnippet === `${idx}` ? (
                              <Check className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-muted-foreground" />
                            )}
                          </button>
                        </div>
                      </div>
                      <pre className="p-4 bg-[#0B0F14] text-[#E1E7EF] text-sm overflow-x-auto">
                        <code>{chapter.codeSnippet?.code}</code>
                      </pre>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Column - Briefing Notes Sidebar */}
          <aside className="hidden lg:block space-y-6">
            {/* Problem Statement Card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Problem Statement
              </h3>
              <p className="text-foreground leading-relaxed">
                {briefing.problemStatement}
              </p>
            </div>

            {/* Key Results Card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Key Results
              </h3>
              <ul className="space-y-3">
                {briefing.keyResults.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <span className="text-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chapters Accordion */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="px-6 py-4 border-b border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Briefing Notes
                </h3>
              </div>
              <ChapterAccordion 
                chapters={briefing.chapters}
                activeChapter={activeChapter}
                setActiveChapter={setActiveChapter}
                copiedSnippet={copiedSnippet}
                onCopy={copyToClipboard}
              />
            </div>

          </aside>
        </div>


        {/* Back Navigation */}
        <div className="mt-8">
          <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Briefings
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Chapter Accordion Component
function ChapterAccordion({ 
  chapters, 
  activeChapter, 
  setActiveChapter,
  copiedSnippet,
  onCopy 
}: { 
  chapters: BriefingChapter[];
  activeChapter: string;
  setActiveChapter: (value: string) => void;
  copiedSnippet: string | null;
  onCopy: (code: string, index: number) => void;
}) {
  return (
    <Accordion 
      type="single" 
      collapsible 
      value={activeChapter}
      onValueChange={setActiveChapter}
      className="w-full"
    >
      {chapters.map((chapter, idx) => (
        <AccordionItem key={idx} value={`${idx}`} className="border-border">
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/30">
            <div className="flex items-center gap-3 text-left">
              <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                {chapter.timestamp}
              </span>
              <span className="font-medium text-foreground">{chapter.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            <p className="text-muted-foreground leading-relaxed mb-4">
              {chapter.content}
            </p>
            {chapter.codeSnippet && (
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="flex items-center justify-between px-3 py-1.5 bg-secondary/50 border-b border-border">
                  <span className="text-xs text-muted-foreground">
                    {chapter.codeSnippet.language}
                  </span>
                  <button
                    onClick={() => onCopy(chapter.codeSnippet!.code, idx)}
                    className="p-1 hover:bg-background rounded transition-colors"
                  >
                    {copiedSnippet === `${idx}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <pre className="p-3 bg-[#0B0F14] text-[#E1E7EF] text-xs overflow-x-auto">
                  <code>{chapter.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
