import { Wine, Grape, Beer, GlassWater, Bus } from 'lucide-react';
import { WinerySubcategory, winerySubcategories } from '@/data/attractions';
import { cn } from '@/lib/utils';

const iconMap = {
  Wine,
  Grape,
  Beer,
  GlassWater,
  Bus,
};

type WinerySubcategoryOption = WinerySubcategory | 'all';

interface WinerySubcategoryFilterProps {
  activeSubcategory: WinerySubcategoryOption;
  onSubcategoryChange: (subcategory: WinerySubcategoryOption) => void;
}

const WinerySubcategoryFilter = ({ activeSubcategory, onSubcategoryChange }: WinerySubcategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {winerySubcategories.map((subcategory) => {
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
  );
};

export default WinerySubcategoryFilter;
export type { WinerySubcategoryOption };
