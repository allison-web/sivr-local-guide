import { MapPin, Clock, ExternalLink, Phone, Navigation } from 'lucide-react';
import { Attraction, Region } from '@/data/attractions';
import { cn } from '@/lib/utils';

interface AttractionCardProps {
  attraction: Attraction;
  index: number;
}

const categoryLabels: Record<string, string> = {
  food: 'Food + Beverage',
  lake: 'Lake of Egypt',
  outdoors: 'Great Outdoors',
  rainy: 'Rainy Day Fun',
  wineries: 'Wineries',
};

const regionLabels: Record<Region, string> = {
  west: 'West',
  central: 'Central',
  east: 'East',
};

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
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          {categoryLabels[attraction.category] || attraction.category}
        </span>
        
        {/* Region Badge */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-sivr-blue/90 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          <Navigation className="h-3 w-3" />
          {regionLabels[attraction.region]}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground transition-colors group-hover:text-sivr-blue">
          {attraction.name}
        </h3>

        {/* Location & Distance */}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-sivr-copper" />
            <span className="truncate max-w-[150px]">{attraction.location}</span>
          </span>
          {attraction.distance && (
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-sivr-copper" />
              {attraction.distance}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {attraction.description}
        </p>

        {/* Highlights */}
        <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {attraction.highlights.slice(0, 3).map((highlight) => (
            <span
              key={highlight}
              className="rounded-md bg-secondary px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-medium text-secondary-foreground"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
          {attraction.website && (
            <a
              href={attraction.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-sivr-blue transition-colors hover:text-sivr-copper"
            >
              Visit Website
              <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </a>
          )}
          {attraction.phone && (
            <a
              href={`tel:${attraction.phone}`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-sivr-blue"
            >
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              {attraction.phone}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default AttractionCard;
