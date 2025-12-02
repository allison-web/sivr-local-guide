import { Lightbulb, Sun, Car, Phone, MapPin, Wine } from 'lucide-react';

const tips = [
  {
    icon: Sun,
    title: 'Best Time to Visit',
    description: 'Spring and fall offer the best weather for hiking. Fall foliage at Garden of the Gods is spectacular! Summer is perfect for lake activities.',
  },
  {
    icon: Car,
    title: 'Getting Around',
    description: 'A car is essential for exploring. Many attractions are scenic country drives. Download offline maps before heading to remote trails.',
  },
  {
    icon: Wine,
    title: 'Winery Tip',
    description: 'Visit wineries on weekends for live music events! Plan to visit 2-3 wineries per day along the Shawnee Hills Wine Trail.',
  },
  {
    icon: MapPin,
    title: 'Garden of the Gods',
    description: 'Arrive at sunrise for magical views and smaller crowds. The Observation Trail is an easy 1/4 mile loop perfect for all ages.',
  },
];

const QuickTips = () => {
  return (
    <section className="bg-sivr-sand py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
            Tips for Your Visit
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Make the most of your Southern Illinois adventure with these helpful tips from the Haslers.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip, index) => (
            <div
              key={tip.title}
              className="group rounded-xl bg-card p-5 sm:p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-sivr-blue/10 text-sivr-blue transition-colors group-hover:bg-sivr-blue group-hover:text-primary-foreground">
                <tip.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">
                {tip.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickTips;
