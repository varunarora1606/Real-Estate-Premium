import PropertyCard from "./PropertyCard";
import { Button } from "./ui/button";

const FeaturedProperties = () => {
  const properties = [
    {
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      title: "4 BHK Penthouse",
      location: "Greater Kailash, South Delhi",
      price: "₹4.5 Cr",
      type: "sale" as const,
      beds: 4,
      baths: 4,
      sqft: 3500,
      tags: ["Private Lift", "Terrace Pool", "Smart Home"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      title: "5 BHK Villa",
      location: "DLF Phase 5, Gurgaon",
      price: "₹8.2 Cr",
      type: "sale" as const,
      beds: 5,
      baths: 6,
      sqft: 5200,
      tags: ["Private Garden", "Home Theater", "Wine Cellar"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      title: "3 BHK Apartment",
      location: "Sector 128, Noida",
      price: "₹85,000/mo",
      type: "rent" as const,
      beds: 3,
      baths: 3,
      sqft: 2200,
      tags: ["Golf View", "Furnished", "Valet Parking"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      title: "4 BHK Penthouse",
      location: "Greater Kailash, South Delhi",
      price: "₹4.5 Cr",
      type: "sale" as const,
      beds: 4,
      baths: 4,
      sqft: 3500,
      tags: ["Private Lift", "Terrace Pool", "Smart Home"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      title: "5 BHK Villa",
      location: "DLF Phase 5, Gurgaon",
      price: "₹8.2 Cr",
      type: "sale" as const,
      beds: 5,
      baths: 6,
      sqft: 5200,
      tags: ["Private Garden", "Home Theater", "Wine Cellar"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      title: "3 BHK Apartment",
      location: "Sector 128, Noida",
      price: "₹85,000/mo",
      type: "rent" as const,
      beds: 3,
      baths: 3,
      sqft: 2200,
      tags: ["Golf View", "Furnished", "Valet Parking"],
    },
  ];

  return (
    <section id="properties" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase">
              Exclusive Collection
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6">
            Featured Properties
          </h2>
          <p className="text-ivory-muted font-sans max-w-2xl mx-auto text-lg">
            Handpicked residences that define luxury living in India's most
            prestigious locations
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gold text-primary-foreground hover:bg-gold-light px-10 py-6 text-base font-sans tracking-wide shadow-gold transition-all duration-300 hover:shadow-lg"
          >
            Book a Confidential Consultation
          </Button>

          {/* <button className="group inline-flex items-center gap-3 font-sans text-gold border-b-2 border-gold pb-2 hover:border-gold-light hover:text-gold-light transition-colors duration-300">
            <span className="tracking-wide">View All Properties</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
