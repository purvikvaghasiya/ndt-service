import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import CourseCard from "@/components/CourseCard";
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
              Our Programs
            </span>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
              NDT Certification Courses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed to meet international
              standards and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((main) =>
              main.subProducts.map((sub) => (
                <CourseCard key={sub.id} product={sub} category={main.title} />
              )),
            )}
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
