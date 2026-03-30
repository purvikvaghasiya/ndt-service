import { Users, Wrench, Award, Briefcase, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Exam-Oriented Study Material",
    description:
      "Designed as per latest API, CSWIP, BGAS & NDT exam patterns with important concepts and MCQs.",
  },
  {
    icon: Wrench,
    title: "Real Industrial Concepts",
    description:
      "Learn actual field-based concepts used in oil & gas, piping, welding, and inspection work.",
  },
  {
    icon: Award,
    title: "Certification Support",
    description:
      "High-quality material focused on helping you clear certification exams in first attempt.",
  },
  {
    icon: Briefcase,
    title: "Lifetime Access & Updates",
    description:
      "Get lifetime access to study material with regular updates as per latest codes and standards.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Advantages
          </span>
          <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine theoretical knowledge with extensive practical training
            to prepare you for real-world NDT challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card p-6 lg:p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={28} className="text-accent-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10 flex items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            <CheckCircle size={16} className="text-green-500" />
            Trusted by 1000+ Students
          </span>
          <span>|</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle size={16} className="text-green-500" />
            Industry-Based Learning Approach
          </span>
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
