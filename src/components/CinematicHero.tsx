import { Button } from "@/components/ui/button";

const CinematicHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=80"
          alt="Luxury Modern Villa at Sunset"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 lg:my-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/60" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gold/60" />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-foreground leading-tight">
            Discover Homes That
            <span className="block text-gold italic mt-2">Reflect Your Success</span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-lg md:text-xl text-ivory-muted max-w-2xl mx-auto leading-relaxed">
            Experience the pinnacle of luxury living with our exclusive collection of 
            premium properties curated for the most discerning buyers.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-gold text-primary-foreground hover:bg-gold-light px-10 py-6 text-base font-sans tracking-wide shadow-gold transition-all duration-300 hover:shadow-lg"
            >
              Book a Confidential Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 pt-12 border-t border-border/30 mt-12">
            <div className="text-center">
              <div className="font-serif text-4xl lg:text-5xl text-gold mb-2">₹500Cr+</div>
              <div className="font-sans text-sm text-ivory-muted tracking-wide uppercase">Portfolio Value</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl lg:text-5xl text-gold mb-2">150+</div>
              <div className="font-sans text-sm text-ivory-muted tracking-wide uppercase">Exclusive Properties</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl lg:text-5xl text-gold mb-2">12+</div>
              <div className="font-sans text-sm text-ivory-muted tracking-wide uppercase">Years of Trust</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div> */}
    </section>
  );
};

export default CinematicHero;