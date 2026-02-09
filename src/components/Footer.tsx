import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="NDT Training Institute"
                className="h-12 lg:h-12 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Leading NDT training institute providing ISO-certified courses
              with industry-oriented practical training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Courses", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={
                      link === "Home"
                        ? "/"
                        : `/${link.toLowerCase().replace(" ", "-")}`
                    }
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Our Courses</h4>
            <ul className="space-y-2">
              {[
                "API Material",
                "CSWIP & BGAS Material",
                "ASNT level III Material",
                "ARAMCO CBT Material",
                "QA/QC Material",
              ].map((course) => (
                <li key={course}>
                  <span className="text-primary-foreground/80 text-sm">
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-primary-foreground/80 text-sm">
                  Surat, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+919428194318"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  +91 94281 94318
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:api.cswip.bgas.ndt@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  api.cswip.bgas.ndt@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} NDT Training Institute. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
