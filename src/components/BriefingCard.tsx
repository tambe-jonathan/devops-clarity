import { Play, Clock, Gauge, Layers } from "lucide-react";
import { Briefing, stateColors } from "@/data/briefings";

interface BriefingCardProps {
  briefing: Briefing;
  onSelect: (briefing: Briefing) => void;
  index: number;
  isVisible: boolean;
}

export function BriefingCard({ briefing, onSelect, index, isVisible }: BriefingCardProps) {
  const stateStyle = stateColors[briefing.state];

  return (
    <button
      onClick={() => onSelect(briefing)}
      className={`group text-left w-full bg-card rounded-xl overflow-hidden border border-border/50 hover:border-border transition-all duration-500 ease-out hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${150 + index * 100}ms` }}
    >
      {/* Thumbnail Area - 16:9 */}
      <div className="relative aspect-video bg-gradient-to-br from-secondary to-muted overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>

        {/* State Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide ${stateStyle.bg} ${stateStyle.text} border ${stateStyle.border}`}>
            [{briefing.state}]
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-foreground/80 text-background backdrop-blur-sm">
            <Clock className="w-3 h-3" />
            {briefing.duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-sm md:text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300 mb-3">
          {briefing.title}
        </h3>

        {/* Stats Row */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5" />
            <span>{briefing.complexity}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>{briefing.stack.slice(0, 2).join(', ')}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
