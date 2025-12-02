const WelcomeSection = () => {
  return (
    <section className="bg-sivr-sand py-12 sm:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left md:gap-8">
          {/* Owner Image */}
          <div className="relative flex-shrink-0">
            <div className="h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full border-4 border-card shadow-lg">
              <img
                src="https://hub.touchstay.com/media/cache/57/af/57aff4def9f80ca972499e9d6dd301d0.jpg?timestamp=20250619192313"
                alt="The Hasler Family - Owners of SIVR"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 rounded-full bg-sivr-blue px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
              Your Hosts
            </div>
          </div>

          {/* Welcome Message */}
          <div className="flex-1">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
              Welcome from the Haslers!
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Hi there! I'm Allison, the proud owner and founder of Southern Illinois Vacation Rentals. 
              Our family and team is dedicated to making every part of your stay truly wonderful. 
              Over twenty years ago, Michael and I would travel to Southern Illinois for many of the 
              same reasons you might be coming now! It's amazing how our journey has come full circle 
              as we get to share all the things we love about this beautiful area with wonderful guests like you!
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="mailto:hello@sivr.rentals"
                className="text-sm font-medium text-sivr-blue hover:text-sivr-copper transition-colors"
              >
                hello@sivr.rentals
              </a>
              <a
                href="tel:618-202-5247"
                className="text-sm font-medium text-sivr-blue hover:text-sivr-copper transition-colors"
              >
                (618) 202-5247
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
