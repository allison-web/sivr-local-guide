import { Mountain, Droplets, TreePine, Compass, Eye, Waves, Fish } from 'lucide-react';
import { OutdoorsSubcategory, outdoorsSubcategories } from '@/data/attractions';
import { cn } from '@/lib/utils';

const iconMap = {
  Mountain,
  Droplets,
  TreePine,
  Compass,
  Eye,
  Waves,
  Fish,
};

type OutdoorsSubcategoryOption = OutdoorsSubcategory | 'all';

interface OutdoorsSubcategoryFilterProps {
  activeSubcategory: OutdoorsSubcategoryOption;
  onSubcategoryChange: (subcategory: OutdoorsSubcategoryOption) => void;
}

const OutdoorsSubcategoryFilter = ({ activeSubcategory, onSubcategoryChange }: OutdoorsSubcategoryFilterProps) => {
  return (
    <div className="w-full pb-2 -mb-2">
      <div className="flex flex-wrap justify-center gap-2 px-1">
        {outdoorsSubcategories.map((subcategory) => {
          const Icon = iconMap[subcategory.icon as keyof typeof iconMap];
          const isActive = activeSubcategory === subcategory.id;

          return (
            <button
              key={subcategory.id}
              onClick={() => onSubcategoryChange(subcategory.id)}
              className={cn(
                'group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300',
                isActive
                  ? 'bg-sivr-blue text-primary-foreground shadow-md'
                  : 'bg-card text-muted-foreground shadow-sm hover:bg-secondary hover:text-foreground'
              )}
            >
              <Icon className={cn('h-3 w-3', isActive && 'text-primary-foreground')} />
              <span>{subcategory.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default OutdoorsSubcategoryFilter;
export type { OutdoorsSubcategoryOption };