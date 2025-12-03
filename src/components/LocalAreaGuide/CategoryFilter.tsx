import { Compass, Mountain, Waves, Wine, UtensilsCrossed, CloudRain, Ticket, ShoppingBag } from 'lucide-react';
import { Category, categories } from '@/data/attractions';
import { cn } from '@/lib/utils';

const iconMap = {
  Compass,
  Mountain,
  Waves,
  Wine,
  UtensilsCrossed,
  CloudRain,
  Ticket,
  ShoppingBag,
};

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="w-full overflow-x-auto pb-2 -mb-2 scrollbar-hide">
      <div className="flex gap-2 sm:gap-3 sm:flex-wrap sm:justify-center min-w-max sm:min-w-0 px-1">
        {categories.map((category) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap];
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                'group flex items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0',
                isActive
                  ? 'bg-sivr-blue text-primary-foreground shadow-md'
                  : 'bg-card text-muted-foreground shadow-card hover:bg-secondary hover:text-foreground hover:shadow-card-hover'
              )}
            >
              <Icon
                className={cn(
                  'h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:scale-110',
                  isActive && 'text-primary-foreground'
                )}
              />
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;