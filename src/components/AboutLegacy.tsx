const AboutLegacy = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase">
                Our Story
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight">
              A Legacy of Trust in
              <span className="text-gold block mt-2">Luxury Real Estate</span>
            </h2>

            {/* Body Text */}
            <div className="space-y-6 font-sans text-lg text-ivory-muted leading-relaxed">
              <p>
                At Aurelia Estates, we believe that a home is more than an address — it's a 
                statement of who you are. For over a decade, we've been the trusted partners 
                of India's most discerning families, helping them find residences that reflect 
                their aspirations.
              </p>
              <p>
                Our philosophy is simple: <span className="text-gold">quality over quantity</span>. 
                We don't list every property — we curate only the exceptional. Each home in our 
                portfolio has been personally vetted for architectural excellence, prime location, 
                and investment potential.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-gold pl-6 py-4">
              <p className="font-serif text-xl lg:text-2xl text-foreground italic">
                "We don't sell houses. We help you acquire assets that define your lifestyle."
              </p>
              <footer className="mt-4 font-sans text-sm text-ivory-muted">
                — The Aurelia Philosophy
              </footer>
            </blockquote>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div>
                <div className="font-serif text-3xl text-gold">98%</div>
                <div className="font-sans text-sm text-ivory-muted">Client Satisfaction</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-gold">250+</div>
                <div className="font-sans text-sm text-ivory-muted">Families Served</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-gold">₹2000Cr+</div>
                <div className="font-sans text-sm text-ivory-muted">Transactions Closed</div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Luxury Interior Living Space"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              {/* Gold Border Accent */}
              <div className="absolute inset-0 border-2 border-gold/20 rounded-lg" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-gold/40" />

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-gold text-primary-foreground px-6 py-4 rounded-lg shadow-lg">
              <div className="font-serif text-2xl font-semibold">12+</div>
              <div className="font-sans text-xs uppercase tracking-wide">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLegacy;