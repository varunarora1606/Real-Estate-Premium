import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      title: "Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      quote:
        "Aurelia Estates understood exactly what we were looking for. Their attention to detail and discretion made the entire process seamless. We found our dream penthouse in just two weeks.",
      rating: 5,
    },
    {
      name: "Dr. Priya Sharma",
      title: "NRI Investor, London",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      quote:
        "As an NRI, managing property investments from abroad was always stressful. Aurelia's end-to-end service gave me complete peace of mind. Truly exceptional professionals.",
      rating: 5,
    },
    {
      name: "Vikram & Ananya Kapoor",
      title: "Tech Entrepreneurs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      quote:
        "The team at Aurelia doesn't just show you properties — they understand your lifestyle and curate options accordingly. Our villa in Gurgaon exceeded every expectation.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase">
              Testimonials
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
            Client Testimonials
          </h2>
          <p className="text-ivory-muted font-sans max-w-2xl mx-auto text-lg">
            Read what our discerning clients say about their experience with Aurelia Estates
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 relative group hover:border-gold/50 transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/20" />

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground">{testimonial.name}</h4>
                  <p className="font-sans text-sm text-ivory-muted">{testimonial.title}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-ivory-muted leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Dots (Decorative) */}
        {/* <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 rounded-full bg-gold" />
          <div className="w-3 h-3 rounded-full bg-gold/30" />
          <div className="w-3 h-3 rounded-full bg-gold/30" />
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;