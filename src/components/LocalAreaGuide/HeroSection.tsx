import heroImage from '@/assets/hero-local-guide.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Stunning view of Southern Illinois landscape with rock formations"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <span className="mb-4 inline-block animate-fade-up rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium tracking-wide text-primary-foreground backdrop-blur-sm">
          Southern Illinois Vacation Rentals
        </span>
        
        <h1 className="animate-fade-up font-display text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl [animation-delay:100ms]">
          Local Area Guide
        </h1>
        
        <p className="mt-6 max-w-2xl animate-fade-up text-lg text-primary-foreground/90 sm:text-xl [animation-delay:200ms]">
          Discover the natural wonders, award-winning wineries, and hidden gems 
          of Shawnee National Forest and Southern Illinois
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up [animation-delay:400ms]">
          <div className="flex flex-col items-center gap-2 text-primary-foreground/70">
            <span className="text-sm font-medium tracking-wide">Explore</span>
            <div className="h-12 w-6 rounded-full border-2 border-primary-foreground/30 p-1">
              <div className="h-2 w-2 animate-bounce rounded-full bg-primary-foreground/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
