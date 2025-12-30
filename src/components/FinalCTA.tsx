import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-charcoal to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-gold/10 via-gold/5 to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Decorative Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-gold/30 mb-4">
            <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gold" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground">
            Let's Find Your
            <span className="text-gold block mt-2">Perfect Address</span>
          </h2>

          {/* Subtext */}
          <p className="font-sans text-lg lg:text-xl text-ivory-muted max-w-xl mx-auto leading-relaxed">
            Schedule a private viewing with our luxury property consultants and discover residences 
            that match your vision of exceptional living.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-gold text-primary-foreground hover:bg-gold-light px-12 py-6 text-base font-sans tracking-wide shadow-gold transition-all duration-300 hover:shadow-lg"
            >
              Schedule a Private Viewing
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm font-sans text-ivory-muted">
            <a href="tel:+911234567890" className="hover:text-gold transition-colors duration-300">
              +91 123 456 7890
            </a>
            <span className="text-gold">|</span>
            <a href="mailto:concierge@aureliaestates.com" className="hover:text-gold transition-colors duration-300">
              property@shelterestates.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;