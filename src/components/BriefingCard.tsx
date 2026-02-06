import { Play, Clock, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import { Briefing, stateColors } from "@/data/briefings";

interface BriefingCardProps {
  briefing: Briefing;
  index: number;
  isVisible: boolean;
}

export function BriefingCard({ briefing, index, isVisible }: BriefingCardProps) {
  const colors = stateColors[briefing.state];

  return (
    <Link
      to={`/briefing/${briefing.slug}`}
      className={`group block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${150 + index * 100}ms` }}
    >
      {/* Thumbnail Area - 16:9 */}
      <div className="relative aspect-video bg-gradient-to-br from-secondary to-muted overflow-hidden">
        {/* Thumbnail Image */}
        <img 
          src={briefing.thumbnail} 
          alt={briefing.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Impact Tagline Overlay - Shows on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/70 to-foreground/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
          {/* Impact Text */}
          <span className="text-background/80 text-xs font-semibold uppercase tracking-widest mb-2">
            Key Impact
          </span>
          <h4 className="text-background text-lg md:text-xl font-bold leading-tight max-w-[90%]">
            {briefing.impactTagline}
          </h4>
          
          {/* Play Button */}
          <div className="mt-4 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
          </div>
        </div>
        
        {/* State Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${colors.bg} ${colors.text} ${colors.border} border backdrop-blur-sm`}>
            [{briefing.state}]
          </span>
        </div>
        
        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 group-hover:opacity-0 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-foreground/80 text-background text-xs font-medium">
            <Clock className="w-3 h-3" />
            {briefing.duration}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
          {briefing.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {briefing.description}
        </p>
        
        {/* Stats Row */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Gauge className="w-3.5 h-3.5" />
            {briefing.complexity}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
            {briefing.stack.length} tools
          </span>
        </div>
      </div>
    </Link>
  );
}
