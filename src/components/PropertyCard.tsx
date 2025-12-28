import { MapPin, Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  type: "sale" | "rent";
  beds: number;
  baths: number;
  sqft: number;
  tags: string[];
}

const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  type, 
  beds, 
  baths, 
  sqft, 
  tags 
}: PropertyCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-gold h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Type Badge - Top Left */}
        <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-sans font-medium ${
          type === "sale" 
            ? "bg-emerald-600 text-white" 
            : "bg-gold text-background"
        }`}>
          {type === "sale" ? "For Sale" : "For Rent"}
        </div>
        
        {/* Price Badge - Bottom Right */}
        <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm px-5 py-2 rounded-full">
          <span className="font-serif text-lg font-semibold text-foreground">{price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 bg-card">
        {/* Title */}
        <h3 className="font-serif text-xl lg:text-2xl text-foreground group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center gap-2 text-ivory-muted">
          <MapPin className="w-4 h-4 text-gold" />
          <span className="text-sm font-sans">{location}</span>
        </div>

        {/* Property Specs */}
        <div className="flex items-center gap-6 pt-2 border-t border-border/30">
          <div className="flex items-center gap-2 text-foreground">
            <Bed className="w-4 h-4 text-ivory-muted" />
            <span className="text-sm font-sans">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Bath className="w-4 h-4 text-ivory-muted" />
            <span className="text-sm font-sans">{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Square className="w-4 h-4 text-ivory-muted" />
            <span className="text-sm font-sans">{sqft} sq.ft</span>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {(tags || []).map((tag, index) => (
            <span 
              key={index} 
              className="px-4 py-1.5 text-xs font-sans font-medium text-ivory-muted border border-border rounded-full hover:border-gold hover:text-gold transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
