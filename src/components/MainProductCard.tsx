import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { MainProduct } from "@/data/courses";

interface MainProductCardProps {
  product: MainProduct;
}

const MainProductCard = ({ product }: MainProductCardProps) => {
  const firstImage = product.subProducts[0]?.images?.[0];
  const count = product.subProducts.length;

  return (
    <Link
      to={`/category/${product.id}`}
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 block"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <img
          src={firstImage}
          alt={product.title}
          className="w-full h-full object-cover rounded-t-xl"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {product.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="bg-black/60 text-white px-2 py-1 rounded-lg text-xs font-medium">
            {count} {count === 1 ? "Material" : "Materials"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
          {product.title}
        </h3>

        <div className="flex flex-wrap gap-1 mb-4">
          {product.subProducts.slice(0, 3).map((sub) => (
            <span
              key={sub.id}
              className="bg-accent/10 text-accent text-xs px-2 py-0.5 rounded-full"
            >
              {sub.title.replace(/^📘\s*/, "").split(" ").slice(0, 3).join(" ")}…
            </span>
          ))}
          {count > 3 && (
            <span className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded-full">
              +{count - 3} more
            </span>
          )}
        </div>

        <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
          View All Materials
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default MainProductCard;
