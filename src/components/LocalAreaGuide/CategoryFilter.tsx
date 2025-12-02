import { Compass, Mountain, Wine, UtensilsCrossed, Camera } from 'lucide-react';
import { Category, categories } from '@/data/attractions';
import { cn } from '@/lib/utils';

const iconMap = {
  Compass,
  Mountain,
  Wine,
  UtensilsCrossed,
  Camera,
};

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap];
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              'group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300',
              isActive
                ? 'bg-sivr-blue text-primary-foreground shadow-md'
                : 'bg-card text-muted-foreground shadow-card hover:bg-secondary hover:text-foreground hover:shadow-card-hover'
            )}
          >
            <Icon
              className={cn(
                'h-4 w-4 transition-transform duration-300 group-hover:scale-110',
                isActive && 'text-primary-foreground'
              )}
            />
            <span>{category.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
