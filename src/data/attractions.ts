export type Category = 'all' | 'outdoor' | 'wineries' | 'dining' | 'attractions';

export interface Attraction {
  id: string;
  name: string;
  category: Category;
  description: string;
  location: string;
  distance: string;
  image: string;
  highlights: string[];
  website?: string;
}

export const categories: { id: Category; label: string; icon: string }[] = [
  { id: 'all', label: 'All', icon: 'Compass' },
  { id: 'outdoor', label: 'Outdoor Adventures', icon: 'Mountain' },
  { id: 'wineries', label: 'Wineries & Trails', icon: 'Wine' },
  { id: 'dining', label: 'Local Dining', icon: 'UtensilsCrossed' },
  { id: 'attractions', label: 'Attractions', icon: 'Camera' },
];

export const attractions: Attraction[] = [
  {
    id: '1',
    name: 'Garden of the Gods',
    category: 'outdoor',
    description: 'Spectacular sandstone rock formations offering breathtaking views and world-class hiking trails through ancient geological wonders.',
    location: 'Herod, IL',
    distance: '25 min drive',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    highlights: ['Observation Trail', 'Sunrise Views', 'Photography Spots'],
    website: 'https://www.fs.usda.gov/recarea/shawnee/recarea/?recid=10680',
  },
  {
    id: '2',
    name: 'Shawnee National Forest',
    category: 'outdoor',
    description: 'Over 280,000 acres of pristine wilderness featuring hiking trails, rock climbing, horseback riding, and stunning natural beauty.',
    location: 'Southern Illinois',
    distance: '15 min drive',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
    highlights: ['Giant City Lodge', 'Bell Smith Springs', 'Little Grand Canyon'],
  },
  {
    id: '3',
    name: 'Lake of Egypt',
    category: 'outdoor',
    description: 'Crystal-clear 2,300-acre lake perfect for fishing, boating, kayaking, and peaceful waterfront relaxation.',
    location: 'Marion, IL',
    distance: '10 min drive',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    highlights: ['Bass Fishing', 'Boat Rentals', 'Swimming'],
  },
  {
    id: '4',
    name: 'Blue Sky Vineyard',
    category: 'wineries',
    description: 'Award-winning winery offering stunning hilltop views, live music events, and exceptional Southern Illinois wines.',
    location: 'Makanda, IL',
    distance: '20 min drive',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80',
    highlights: ['Wine Tastings', 'Live Music', 'Sunset Views'],
    website: 'https://www.blueskyvineyard.com',
  },
  {
    id: '5',
    name: 'StarView Vineyards',
    category: 'wineries',
    description: 'Charming winery with panoramic valley views, artisan wines, and a welcoming atmosphere for wine enthusiasts.',
    location: 'Cobden, IL',
    distance: '25 min drive',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    highlights: ['Artisan Wines', 'Valley Views', 'Private Tastings'],
  },
  {
    id: '6',
    name: 'Shawnee Hills Wine Trail',
    category: 'wineries',
    description: 'Explore 12 unique wineries along this scenic trail through rolling hills and beautiful Southern Illinois countryside.',
    location: 'Various Locations',
    distance: '15-45 min drive',
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80',
    highlights: ['12 Wineries', 'Scenic Route', 'Weekend Events'],
    website: 'https://www.shawneewinetrail.com',
  },
  {
    id: '7',
    name: '17th Street Barbecue',
    category: 'dining',
    description: 'World-famous BBQ from pitmaster Mike Mills, featuring award-winning ribs, pulled pork, and authentic Southern flavors.',
    location: 'Marion, IL',
    distance: '15 min drive',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80',
    highlights: ['Award-Winning Ribs', 'Family Recipes', 'Southern Hospitality'],
    website: 'https://17bbq.com',
  },
  {
    id: '8',
    name: 'Giant City Lodge',
    category: 'dining',
    description: 'Historic lodge serving legendary family-style fried chicken dinners in a stunning natural setting since 1939.',
    location: 'Makanda, IL',
    distance: '20 min drive',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80',
    highlights: ['Family-Style Dining', 'Historic Lodge', 'Scenic Setting'],
  },
  {
    id: '9',
    name: 'Longbranch Cafe & Bakery',
    category: 'dining',
    description: 'Beloved local cafe featuring fresh-baked goods, hearty breakfasts, and friendly small-town atmosphere.',
    location: 'Carbondale, IL',
    distance: '25 min drive',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    highlights: ['Fresh Baked Goods', 'Local Favorite', 'Breakfast Specials'],
  },
  {
    id: '10',
    name: 'Pomona Natural Bridge',
    category: 'attractions',
    description: 'Illinois\' largest natural bridge, a 90-foot sandstone arch created by millions of years of natural erosion.',
    location: 'Pomona, IL',
    distance: '30 min drive',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    highlights: ['Natural Wonder', 'Easy Hike', 'Photo Opportunity'],
  },
  {
    id: '11',
    name: 'Cache River Wetlands',
    category: 'attractions',
    description: 'Explore ancient cypress swamps, spot wildlife, and kayak through one of the most unique ecosystems in Illinois.',
    location: 'Belknap, IL',
    distance: '35 min drive',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    highlights: ['Ancient Cypress Trees', 'Wildlife Viewing', 'Kayaking'],
  },
  {
    id: '12',
    name: 'Alto Vineyards',
    category: 'wineries',
    description: 'The oldest and largest vineyard in Southern Illinois, offering exceptional wines and beautiful grounds for tastings.',
    location: 'Alto Pass, IL',
    distance: '25 min drive',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80',
    highlights: ['Oldest Vineyard', 'Award-Winning', 'Scenic Grounds'],
    website: 'https://www.altovineyards.net',
  },
];
