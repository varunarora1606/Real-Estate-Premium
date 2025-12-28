import { Gem, Shield, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Gem,
      title: "Curated Portfolio",
      description:
        "Each property in our collection is handpicked, ensuring only the finest residences meet our exacting standards for luxury and exclusivity.",
    },
    {
      icon: Shield,
      title: "End-to-End Advisory",
      description:
        "From property discovery to key handover, our dedicated team provides seamless guidance through every step of your real estate journey.",
    },
    {
      icon: Users,
      title: "Trusted by HNIs & NRIs",
      description:
        "Over a decade of serving India's elite clientele with discretion, integrity, and an unwavering commitment to excellence.",
    },
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase">
              The Aurelia Difference
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
            Why Choose Us
          </h2>
          <p className="text-ivory-muted font-sans max-w-2xl mx-auto text-lg">
            Experience a new standard in luxury real estate service
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-card border border-border hover:border-gold/50 rounded-lg p-8 lg:p-10 text-center transition-all duration-500 hover:shadow-gold"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gold/30 group-hover:border-gold mb-6 transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-ivory-muted leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;