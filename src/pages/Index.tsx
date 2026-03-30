import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import MainProductCard from "@/components/MainProductCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactCTA from "@/components/ContactCTA";
import { courses } from "@/data/courses";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroCarousel />

      {/* Courses Section */}
      <section id="courses" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Our Course
            </span>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
              Professional Certification Study Material
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              High-quality study material for API, CSWIP, BGAS & NDT
              certifications with real industrial concepts and exam-oriented
              preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((main) => (
              <MainProductCard key={main.id} product={main} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Contact CTA */}
      <ContactCTA />
    </Layout>
  );
};

export default Index;
