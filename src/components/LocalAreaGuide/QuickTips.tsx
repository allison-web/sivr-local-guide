import { Lightbulb, Sun, Car, Phone } from 'lucide-react';

const tips = [
  {
    icon: Sun,
    title: 'Best Time to Visit',
    description: 'Spring and fall offer the best weather for hiking and outdoor activities. Fall foliage is spectacular!',
  },
  {
    icon: Car,
    title: 'Getting Around',
    description: 'A car is essential for exploring the area. Many attractions are scenic drives through beautiful countryside.',
  },
  {
    icon: Phone,
    title: 'Cell Service',
    description: 'Coverage can be spotty in remote areas. Download offline maps before heading out on trails.',
  },
  {
    icon: Lightbulb,
    title: 'Local Tip',
    description: 'Plan winery visits on weekends for live music events. Arrive at Garden of the Gods at sunrise for magical views.',
  },
];

const QuickTips = () => {
  return (
    <section className="bg-sivr-sand py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Tips for Your Visit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Make the most of your Southern Illinois adventure with these helpful tips.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip, index) => (
            <div
              key={tip.title}
              className="group rounded-xl bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sivr-blue/10 text-sivr-blue transition-colors group-hover:bg-sivr-blue group-hover:text-primary-foreground">
                <tip.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {tip.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
