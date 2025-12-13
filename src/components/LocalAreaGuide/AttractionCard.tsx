import { useState } from 'react';
import { MapPin, Clock, ExternalLink, Phone, Navigation, Map } from 'lucide-react';
import { Attraction, Region } from '@/data/attractions';
import { cn } from '@/lib/utils';

interface AttractionCardProps {
  attraction: Attraction;
  index: number;
  onMapClick: (attraction: Attraction) => void;
}

const categoryLabels: Record<string, string> = {
  food: 'Food + Beverage',
  lake: 'Lake of Egypt',
  outdoors: 'Great Outdoors',
  rainy: 'Rainy Day Fun',
  wineries: 'Wineries',
  shopping: 'Shopping',
  thingstodo: 'Things to Do',
};

const regionLabels: Record<Region, string> = {
  west: 'West',
  central: 'Central',
  east: 'East',
};

const AttractionCard = ({ attraction, index, onMapClick }: AttractionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-xl bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover',
        'animate-fade-up'
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image */}
      <div 
        className="relative h-48 sm:h-52 overflow-hidden cursor-pointer"
        onClick={() => onMapClick(attraction)}
      >
        <img
          src={attraction.image}
          alt={attraction.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Map Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/20">
          <div className="bg-card/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Map className="h-6 w-6 text-sivr-blue" />
          </div>
        </div>
        
        {/* Category Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          {categoryLabels[Array.isArray(attraction.category) ? attraction.category[0] : attraction.category] || (Array.isArray(attraction.category) ? attraction.category[0] : attraction.category)}
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
        <div className="mt-3">
          <p className={cn(
            "text-sm leading-relaxed text-muted-foreground",
            !isExpanded && "line-clamp-3"
          )}>
            {attraction.description}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-1 text-xs font-medium text-sivr-blue hover:text-sivr-copper transition-colors"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>

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
          <button
            onClick={() => onMapClick(attraction)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-sivr-blue ml-auto"
          >
            <Map className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            View Map
          </button>
        </div>
      </div>
    </article>
  );
};

export default AttractionCard;
