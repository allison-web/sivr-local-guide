import { Waves, Info, Ship, Anchor } from 'lucide-react';
import { LakeSubcategory, lakeSubcategories } from '@/data/attractions';
import { cn } from '@/lib/utils';

const iconMap = {
  Waves,
  Info,
  Ship,
  Anchor,
};

type LakeSubcategoryOption = LakeSubcategory | 'all';

interface LakeSubcategoryFilterProps {
  activeSubcategory: LakeSubcategoryOption;
  onSubcategoryChange: (subcategory: LakeSubcategoryOption) => void;
}

const LakeSubcategoryFilter = ({ activeSubcategory, onSubcategoryChange }: LakeSubcategoryFilterProps) => {
  return (
    <div className="w-full overflow-x-auto pb-2 -mb-2 scrollbar-hide">
      <div className="flex gap-2 sm:flex-wrap sm:justify-center min-w-max sm:min-w-0 px-1">
        {lakeSubcategories.map((subcategory) => {
          const Icon = iconMap[subcategory.icon as keyof typeof iconMap];
          const isActive = activeSubcategory === subcategory.id;

          return (
            <button
              key={subcategory.id}
              onClick={() => onSubcategoryChange(subcategory.id)}
              className={cn(
                'group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0',
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

export default LakeSubcategoryFilter;
export type { LakeSubcategoryOption };