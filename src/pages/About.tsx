import Layout from "@/components/Layout";
import { Target, Eye, Shield, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h1 className="font-display text-3xl lg:text-5xl text-primary-foreground mb-6">
              Excellence in NDT Training Since 2005
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              We are committed to producing highly skilled NDT professionals who meet the demanding standards of the global industry.
            </p>
          </div>
        </div>
      </section>

      {/* Institute Introduction */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Our Institute
              </span>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-6">
                Leading the Way in NDT Education
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Established in 2005, NDT Training Institute has been at the forefront of Non-Destructive Testing education in India. Our state-of-the-art facility is equipped with the latest NDT equipment, providing students with hands-on experience using the same technology they'll encounter in the field.
                </p>
                <p>
                  We have trained over 5,000 professionals who are now working in leading organizations across oil & gas, aerospace, power generation, and manufacturing sectors worldwide.
                </p>
                <p>
                  Our courses are designed in accordance with ASNT SNT-TC-1A, ISO 9712, and other international standards, ensuring our graduates are recognized globally.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <span className="font-display text-4xl font-bold text-accent">5000+</span>
                <p className="text-muted-foreground mt-2">Trained Professionals</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <span className="font-display text-4xl font-bold text-accent">18+</span>
                <p className="text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <span className="font-display text-4xl font-bold text-accent">95%</span>
                <p className="text-muted-foreground mt-2">Success Rate</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <span className="font-display text-4xl font-bold text-accent">50+</span>
                <p className="text-muted-foreground mt-2">Industry Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 lg:p-10 shadow-card">
              <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
                <Target size={28} className="text-accent-foreground" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class NDT training that combines theoretical knowledge with practical skills, preparing our students for successful careers in the inspection industry. We aim to bridge the gap between education and industry requirements.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 lg:p-10 shadow-card">
              <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
                <Eye size={28} className="text-accent-foreground" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the premier NDT training institution in South Asia, setting the benchmark for quality education and producing certified professionals who uphold the highest standards of safety and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Standards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Standards & Accreditation
            </span>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
              Training Standards
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our training programs adhere to internationally recognized standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "ASNT SNT-TC-1A", desc: "American Society for Nondestructive Testing recommended practice" },
              { icon: Award, title: "ISO 9712", desc: "International standard for NDT personnel qualification" },
              { icon: Shield, title: "ISNT Approved", desc: "Indian Society for Non-Destructive Testing certification" },
              { icon: Award, title: "AERB Compliant", desc: "Atomic Energy Regulatory Board approved for RT training" },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
