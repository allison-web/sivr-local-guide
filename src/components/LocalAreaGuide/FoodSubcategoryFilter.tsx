import { Coffee, Sandwich, Heart, IceCream, UtensilsCrossed } from 'lucide-react';
import { FoodSubcategory, foodSubcategories } from '@/data/attractions';
import { cn } from '@/lib/utils';

const iconMap = {
  UtensilsCrossed,
  Coffee,
  Sandwich,
  Heart,
  IceCream,
};

type FoodSubcategoryOption = FoodSubcategory | 'all';

interface FoodSubcategoryFilterProps {
  activeSubcategory: FoodSubcategoryOption;
  onSubcategoryChange: (subcategory: FoodSubcategoryOption) => void;
}

const FoodSubcategoryFilter = ({ activeSubcategory, onSubcategoryChange }: FoodSubcategoryFilterProps) => {
  return (
    <div className="w-full pb-2 -mb-2">
      <div className="flex flex-wrap justify-center gap-2 px-1">
        {foodSubcategories.map((subcategory) => {
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

export default FoodSubcategoryFilter;
export type { FoodSubcategoryOption };