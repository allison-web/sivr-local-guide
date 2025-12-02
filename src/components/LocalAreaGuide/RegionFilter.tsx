import { Navigation } from 'lucide-react';
import { Region } from '@/data/attractions';
import { cn } from '@/lib/utils';

type RegionOption = 'all' | Region;

const regions: { id: RegionOption; label: string }[] = [
  { id: 'all', label: 'All Regions' },
  { id: 'west', label: 'West' },
  { id: 'central', label: 'Central' },
  { id: 'east', label: 'East' },
];

interface RegionFilterProps {
  activeRegion: RegionOption;
  onRegionChange: (region: RegionOption) => void;
}

const RegionFilter = ({ activeRegion, onRegionChange }: RegionFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {regions.map((region) => {
        const isActive = activeRegion === region.id;

        return (
          <button
            key={region.id}
            onClick={() => onRegionChange(region.id)}
            className={cn(
              'group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300',
              isActive
                ? 'bg-sivr-copper text-white shadow-md'
                : 'bg-card text-muted-foreground shadow-sm hover:bg-secondary hover:text-foreground'
            )}
          >
            <Navigation className={cn('h-3 w-3', isActive && 'text-white')} />
            <span>{region.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default RegionFilter;
export type { RegionOption };
