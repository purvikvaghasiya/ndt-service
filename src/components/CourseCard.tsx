import { Link } from "react-router-dom";
import { ArrowRight, IndianRupee } from "lucide-react";
import type { SubProduct } from "@/data/courses";

interface ProductCardProps {
  product: SubProduct;
  category: string; // main product category (ASNT / API etc.)
}

const ProductCard = ({ product, category }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />

        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-full h-full object-cover rounded-t-xl"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
          {product.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap mb-4">
          <div className="flex items-center gap-1">
            <IndianRupee size={16} className="text-accent" />
            <span className="font-semibold text-foreground">{product.price}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <IndianRupee size={13} />
            <span className="text-sm line-through">
              {Math.round(Number(product.price) * 1.2)}
            </span>
          </div>
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
            20% OFF
          </span>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
        >
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
