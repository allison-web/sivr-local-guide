import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { Attraction } from '@/data/attractions';
import { cn } from '@/lib/utils';

interface AttractionCardProps {
  attraction: Attraction;
  index: number;
}

const AttractionCard = ({ attraction, index }: AttractionCardProps) => {
  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-xl bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover',
        'animate-fade-up'
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-medium capitalize text-foreground backdrop-blur-sm">
          {attraction.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-sivr-blue">
          {attraction.name}
        </h3>

        {/* Location & Distance */}
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-sivr-copper" />
            {attraction.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-sivr-copper" />
            {attraction.distance}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {attraction.description}
        </p>

        {/* Highlights */}
        <div className="mt-4 flex flex-wrap gap-2">
          {attraction.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Website Link */}
        {attraction.website && (
          <a
            href={attraction.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sivr-blue transition-colors hover:text-sivr-copper"
          >
            Visit Website
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
};

export default AttractionCard;
