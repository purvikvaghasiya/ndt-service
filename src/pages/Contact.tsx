import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Contact Us
            </span>
            <h1 className="font-display text-3xl lg:text-5xl text-primary-foreground mb-6">
              Get in Touch With Us
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Have questions about our courses? We're here to help you choose
              the right path for your career.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Our Address
                    </h3>
                    <p className="text-muted-foreground">
                      {/* 507, HRK Arcade ,Near Shiv Plaza,
                      <br /> */}
                      Surat, Gujarat India
                      {/* <br />
                      India */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Phone Number
                    </h3>
                    <a
                      href="tel:+919428194318"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 94281 94318
                    </a>
                    {/* <br />
                    <a
                      href="tel:+912212345678"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 22 1234 5678
                    </a> */}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Email Address
                    </h3>
                    <a
                      href="mailto:api.cswip.bgas.ndt@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      api.cswip.bgas.ndt@gmail.com
                    </a>
                    <br />
                    {/* <a
                      href="mailto:admissions@ndttraining.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      admissions@ndttraining.com
                    </a> */}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Working Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday 24 x 7
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  Quick Inquiry
                </h3>
                <WhatsAppButton className="w-full sm:w-auto justify-center" />
              </div>
            </div>

            {/* Map */}
            {/* <div>
              <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-8">
                Find Us on Map
              </h2>
              <div className="bg-card rounded-xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.4613713271556!2d72.89394227472151!3d21.292778378659172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0490055769979%3A0x767a15122982bbf8!2sHRK%20Arcade!5e0!3m2!1sen!2sin!4v1770057256222!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NDT Training Institute Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      {/* <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form className="bg-card rounded-xl p-6 lg:p-10 shadow-card">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                    placeholder="+91 94281 94318"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Interested Course
                </label>
                <select
                  id="course"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                >
                  <option value="">Select a course</option>
                  <option value="ut-1">Ultrasonic Testing Level 1</option>
                  <option value="ut-2">Ultrasonic Testing Level 2</option>
                  <option value="rt-1">Radiographic Testing Level 1</option>
                  <option value="rt-2">Radiographic Testing Level 2</option>
                  <option value="mt">Magnetic Particle Testing</option>
                  <option value="pt">Penetrant Testing</option>
                </select>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-gradient-accent text-accent-foreground py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Contact;
