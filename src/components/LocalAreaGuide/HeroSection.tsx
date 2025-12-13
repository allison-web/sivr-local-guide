import heroImage from '@/assets/hero-local-guide.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-[50vh] min-h-[350px] sm:h-[60vh] sm:min-h-[450px] md:h-[70vh] md:min-h-[500px] overflow-hidden">
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

        {/* Animated Down Arrow */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-fade-up [animation-delay:400ms]">
          <div className="animate-bounce">
            <svg 
              className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground/80" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
