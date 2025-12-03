import { useState, useMemo } from 'react';
import { attractions, Category } from '@/data/attractions';
import CategoryFilter from './CategoryFilter';
import RegionFilter, { RegionOption } from './RegionFilter';
import FoodSubcategoryFilter, { FoodSubcategoryOption } from './FoodSubcategoryFilter';
import WinerySubcategoryFilter, { WinerySubcategoryOption } from './WinerySubcategoryFilter';
import LakeSubcategoryFilter, { LakeSubcategoryOption } from './LakeSubcategoryFilter';
import AttractionCard from './AttractionCard';

const AttractionsGrid = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [activeRegion, setActiveRegion] = useState<RegionOption>('all');
  const [activeFoodSubcategory, setActiveFoodSubcategory] = useState<FoodSubcategoryOption>('all');
  const [activeWinerySubcategory, setActiveWinerySubcategory] = useState<WinerySubcategoryOption>('all');
  const [activeLakeSubcategory, setActiveLakeSubcategory] = useState<LakeSubcategoryOption>('all');

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    if (category !== 'food') {
      setActiveFoodSubcategory('all');
    }
    if (category !== 'wineries') {
      setActiveWinerySubcategory('all');
    }
    if (category !== 'lake') {
      setActiveLakeSubcategory('all');
    }
  };

  const filteredAttractions = useMemo(() => {
    return attractions.filter((a) => {
      const categoryMatch = activeCategory === 'all' || 
        (Array.isArray(a.category) ? a.category.includes(activeCategory) : a.category === activeCategory);
      const regionMatch = activeRegion === 'all' || a.region === activeRegion;
      const foodSubcategoryMatch = 
        activeCategory !== 'food' || 
        activeFoodSubcategory === 'all' || 
        (a.foodSubcategory && a.foodSubcategory.includes(activeFoodSubcategory));
      const winerySubcategoryMatch =
        activeCategory !== 'wineries' ||
        activeWinerySubcategory === 'all' ||
        a.winerySubcategory === activeWinerySubcategory;
      const lakeSubcategoryMatch =
        activeCategory !== 'lake' ||
        activeLakeSubcategory === 'all' ||
        (a.lakeSubcategory && a.lakeSubcategory.includes(activeLakeSubcategory));
      return categoryMatch && regionMatch && foodSubcategoryMatch && winerySubcategoryMatch && lakeSubcategoryMatch;
    });
  }, [activeCategory, activeRegion, activeFoodSubcategory, activeWinerySubcategory, activeLakeSubcategory]);

  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
            Explore Southern Illinois
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
            From breathtaking natural wonders to award-winning wineries, discover 
            everything this beautiful region has to offer during your stay.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-4 sm:mb-6">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Food Subcategory Filter - only shown when Food + Beverage is selected */}
        {activeCategory === 'food' && (
          <div className="mb-4 sm:mb-6">
            <FoodSubcategoryFilter
              activeSubcategory={activeFoodSubcategory}
              onSubcategoryChange={setActiveFoodSubcategory}
            />
          </div>
        )}

        {/* Winery Subcategory Filter - only shown when Wineries & Adult Beverages is selected */}
        {activeCategory === 'wineries' && (
          <div className="mb-4 sm:mb-6">
            <WinerySubcategoryFilter
              activeSubcategory={activeWinerySubcategory}
              onSubcategoryChange={setActiveWinerySubcategory}
            />
          </div>
        )}

        {/* Lake Subcategory Filter - only shown when Lake of Egypt is selected */}
        {activeCategory === 'lake' && (
          <div className="mb-4 sm:mb-6">
            <LakeSubcategoryFilter
              activeSubcategory={activeLakeSubcategory}
              onSubcategoryChange={setActiveLakeSubcategory}
            />
          </div>
        )}

        {/* Region Filter */}
        <div className="mb-8 sm:mb-10">
          <RegionFilter
            activeRegion={activeRegion}
            onRegionChange={setActiveRegion}
          />
        </div>

        {/* Results Count */}
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Showing {filteredAttractions.length} {filteredAttractions.length === 1 ? 'place' : 'places'}
          {activeCategory !== 'all' && ' in this category'}
          {activeRegion !== 'all' && ` • ${activeRegion.charAt(0).toUpperCase() + activeRegion.slice(1)} region`}
        </p>

        {/* Attractions Grid */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="py-12 sm:py-16 text-center">
            <p className="text-base sm:text-lg text-muted-foreground">
              No attractions found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AttractionsGrid;
