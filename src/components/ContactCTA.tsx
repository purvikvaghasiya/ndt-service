import WhatsAppButton from "./WhatsAppButton";
import { Phone } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl text-primary-foreground mb-4">
            Crack API, CSWIP, BGAS & NDT Exams with Confidence
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Get access to exam-focused study material designed for real
            industrial concepts. Achieve certification faster with 85% passing
            support and expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton />
            <a
              href="tel:+919428194318"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all hover:shadow-md"
            >
              <Phone size={20} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
