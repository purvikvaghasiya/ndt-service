import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { ArrowLeft, LayoutGrid } from "lucide-react";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();

  // Active filter: "all" or a main product id like "product-1"
  const [activeFilter, setActiveFilter] = useState<string>(id || "all");

  // Sync filter when URL changes (e.g. user navigates directly)
  useEffect(() => {
    setActiveFilter(id || "all");
  }, [id]);

  const activeMain = useMemo(
    () => courses.find((c) => c.id === activeFilter),
    [activeFilter],
  );

  // Sub-products to display
  const displayedProducts = useMemo(() => {
    if (activeFilter === "all") {
      return courses.flatMap((main) =>
        main.subProducts.map((sub) => ({ sub, mainTitle: main.title })),
      );
    }
    const main = courses.find((c) => c.id === activeFilter);
    return (
      main?.subProducts.map((sub) => ({ sub, mainTitle: main.title })) ?? []
    );
  }, [activeFilter]);

  const pageTitle =
    activeFilter === "all" ? "All Study Materials" : (activeMain?.title ?? "");

  return (
    <Layout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back + Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <Link
              to="/#courses"
              className="inline-flex items-center gap-1 hover:text-accent transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Programs
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-xs">
              {pageTitle}
            </span>
          </div>

          {/* Page heading */}
          <div className="mb-10">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
              {activeFilter === "all"
                ? "All Programs"
                : (activeMain?.category ?? "")}
            </span>
            <h1 className="font-display text-3xl lg:text-4xl text-foreground mb-2">
              {pageTitle}
            </h1>
            <p className="text-muted-foreground text-sm">
              {displayedProducts.length} material
              {displayedProducts.length !== 1 ? "s" : ""} available
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
              {/* All tab */}
              <button
                onClick={() => setActiveFilter("all")}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all whitespace-nowrap ${
                  activeFilter === "all"
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                <LayoutGrid size={14} />
                All
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeFilter === "all"
                      ? "bg-white/20"
                      : "bg-muted"
                  }`}
                >
                  {courses.reduce((sum, c) => sum + c.subProducts.length, 0)}
                </span>
              </button>

              {/* One tab per main product */}
              {courses.map((main) => (
                <button
                  key={main.id}
                  onClick={() => setActiveFilter(main.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all whitespace-nowrap ${
                    activeFilter === main.id
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent"
                  }`}
                >
                  {main.title}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeFilter === main.id
                        ? "bg-white/20"
                        : "bg-muted"
                    }`}
                  >
                    {main.subProducts.length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedProducts.map(({ sub, mainTitle }) => (
              <CourseCard key={sub.id} product={sub} category={mainTitle} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage;
