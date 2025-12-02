import { useState, useMemo } from 'react';
import { attractions, Category } from '@/data/attractions';
import CategoryFilter from './CategoryFilter';
import AttractionCard from './AttractionCard';

const AttractionsGrid = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredAttractions = useMemo(() => {
    if (activeCategory === 'all') return attractions;
    return attractions.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Explore the Area
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From breathtaking natural wonders to award-winning wineries, discover 
            everything Southern Illinois has to offer during your stay.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Attractions Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAttractions.map((attraction, index) => (
            <AttractionCard
              key={attraction.id}
              attraction={attraction}
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredAttractions.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              No attractions found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AttractionsGrid;
