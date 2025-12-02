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
    <div className="flex flex-wrap justify-center gap-2">
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
                ? 'bg-sivr-green text-white shadow-md'
                : 'bg-card text-muted-foreground shadow-sm hover:bg-secondary hover:text-foreground'
            )}
          >
            <Icon className={cn('h-3 w-3', isActive && 'text-white')} />
            <span>{subcategory.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FoodSubcategoryFilter;
export type { FoodSubcategoryOption };
