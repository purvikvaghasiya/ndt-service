import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
// import hero1 from "@/assets/hero-1.jpeg";
// import hero2 from "@/assets/hero-2.jpeg";
import heroNew1 from "@/assets/hero-new-1.jpg";
import heroNew1Mobile from "@/assets/hero-new-1-mobile.jpeg";
import heroNew2 from "@/assets/hero-new-2.jpg";
import heroNew3 from "@/assets/hero-new-3.jpg";

const slides = [
  {
    image: heroNew1,
    mobileImage: heroNew1Mobile,
    title: "Professional NDT Training Institute",
    subtitle: "ISO Certified | Industry Oriented Courses",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Mobile image */}
          <img
            src={slide.mobileImage ?? slide.image}
            alt={slide.title}
            className="block md:hidden w-full h-full object-fill"
          />
          {/* Desktop image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="hidden md:block w-full h-full object-fill"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" /> */}
        </div>
      ))}

      {/* Content */}
      {/* <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground mb-4 animate-slide-up">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#courses"
                onClick={() => {
                  setTimeout(() => {
                    document
                      .getElementById("courses")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="inline-flex items-center justify-center bg-gradient-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              >
                View Courses
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-primary-foreground/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
