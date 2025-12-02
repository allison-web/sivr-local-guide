import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-sivr-blue py-16 sm:py-20">
      {/* Decorative Elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sivr-copper/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
          Ready to Explore Southern Illinois?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Book your stay at one of our hand-picked cabins and vacation rentals, 
          and start your adventure in the heart of Shawnee National Forest.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://sivr.rentals"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-3.5 font-semibold text-sivr-blue transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg"
          >
            Browse Properties
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://sivr.rentals/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
