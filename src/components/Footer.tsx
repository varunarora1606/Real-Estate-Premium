import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Properties", href: "#properties" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const locations = [
    "South Delhi",
    "Gurgaon",
    "Noida",
    "Mumbai",
    "Bangalore",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="font-serif text-gold text-lg font-semibold">A</span>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">
                  Shelter <span className="text-gold">Estates</span>
                </h3>
              </div>
            </div>
            <p className="font-sans text-sm text-ivory-muted leading-relaxed">
              India's premier luxury real estate consultancy, serving discerning buyers 
              with unparalleled properties and personalized service since 2012.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-ivory-muted hover:text-gold hover:border-gold transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ivory-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Our Presence</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location}>
                  <span className="font-sans text-sm text-ivory-muted">
                    {location}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Contact</h4>
            <div className="space-y-4 font-sans text-sm text-ivory-muted">
              <p>
                Tower Z, 15th Floor<br />
                XYZ City<br />
                Gurgaon, Haryana
              </p>
              <p>
                <a href="tel:+911234567890" className="hover:text-gold transition-colors duration-300">
                  +91 123 456 7890
                </a>
              </p>
              <p>
                <a href="mailto:concierge@sheltownestates.com" className="hover:text-gold transition-colors duration-300">
                  property@shelterestates.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans text-ivory-muted">
            <p>© 2024 Shelter Estates. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;