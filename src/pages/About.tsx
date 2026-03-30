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
              Trusted Study Material for API, CSWIP, BGAS & NDT Certifications
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Exam-focused study material based on real industrial concepts to
              help you clear certifications in your first attempt.
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
                Trusted Study Material Provider for Oil & Gas Certifications
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We provide high-quality, exam-oriented study material for API,
                  CSWIP, BGAS, NDT, and QA/QC certifications. Our content is
                  carefully designed based on real industrial concepts,
                  practical knowledge, and the latest international codes and
                  standards used in oil & gas and mechanical industries.
                </p>
                <p>
                  Our study material focuses on helping candidates understand
                  important topics clearly, practice effectively, and build
                  confidence to clear certification exams in their first
                  attempt. With structured content, updated materials, and a
                  result-oriented approach, we ensure better preparation and
                  higher success rates.
                </p>
                {/* <p>
                  Our courses are designed in accordance with ASNT SNT-TC-1A,
                  ISO 9712, and other international standards, ensuring our
                  graduates are recognized globally.
                </p> */}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <span className="font-display text-4xl font-bold text-accent">
                  5000+
                </span>
                <p className="text-muted-foreground mt-2">Student's Result</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <span className="font-display text-4xl font-bold text-accent">
                  15+
                </span>
                <p className="text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <span className="font-display text-4xl font-bold text-accent">
                  95%
                </span>
                <p className="text-muted-foreground mt-2">Success Rate</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <span className="font-display text-4xl font-bold text-accent">
                  50+
                </span>
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
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Our Commitment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide high-quality, exam-oriented study material for API,
                CSWIP, BGAS, NDT, and QA/QC certifications, based on real
                industrial concepts and latest code standards, helping
                candidates achieve success in their first attempt.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 lg:p-10 shadow-card">
              <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
                <Eye size={28} className="text-accent-foreground" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Our Goal
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted platform for certification study material in
                the oil & gas and mechanical industry, supporting candidates
                with updated content, clear concepts, and result-oriented
                learning.
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
              Training Standards - Based on International Codes & Standards
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our study material is prepared based on internationally recognized
              codes and standards used in oil & gas and mechanical industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "ASNT SNT-TC-1A",
                desc: "Based on recommended practices for NDT personnel qualification",
              },
              {
                icon: Award,
                title: "ISO 9712",
                desc: "International standard for NDT personnel certification",
              },
              {
                icon: Shield,
                title: "API Codes",
                desc: "Industry standards for inspection in oil & gas sector",
              },
              {
                icon: Award,
                title: "ASME Standards",
                desc: "Widely used mechanical and pressure vessel codes",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {item.title}
                </h3>
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
