import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getSubProductById, courses } from "@/data/courses";
import {
  ArrowLeft,
  CheckCircle,
  Heart,
  Share2,
  Star,
  IndianRupee,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const formatToK = (num: number) => {
    if (num < 1000) return `${num}`;
    const value = (num / 1000).toFixed(2);
    return `${parseFloat(value)}k`;
  };

  const product = getSubProductById(id || "");
  const [selectedImage, setSelectedImage] = useState(0);

  // Find Main Product (Category/Title) from subProduct id
  const parentProduct = useMemo(() => {
    if (!id) return undefined;
    return courses.find((main) =>
      main.subProducts.some((sub) => sub.id === id),
    );
  }, [id]);

  console.log("parentProduct: ", parentProduct);
  console.log("product: ", product);
  if (!product) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">
            Product Not Found
          </h1>
          <Link to="/" className="text-accent hover:underline">
            Return to Home
          </Link>
        </div>
      </Layout>
    );
  }

  const categoryLabel = parentProduct?.title || "Course Material";

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="py-4 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            to="/#courses"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Side - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted border">
                <img
                  src={product.images?.[selectedImage]}
                  alt={`${product.title} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>

              {/* Thumbnail Gallery */}
              {product.images?.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-accent ring-2 ring-accent/20"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Details */}
            <div className="space-y-6">
              {/* Category */}
              <span className="text-accent font-medium text-sm uppercase tracking-wide">
                {categoryLabel}
              </span>

              {/* Title */}
              <h1 className="font-display text-2xl lg:text-4xl text-foreground leading-tight">
                {product.title}
              </h1>

              {/* Rating (Static UI) */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className={
                        star <= product.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-muted text-muted-foreground"
                      }
                    />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">
                  ({formatToK(product.review)}+ customer reviews)
                </span>
              </div>

              {/* Wishlist & Share */}
              {/* <div className="flex items-center gap-6 border-b pb-6">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <Heart size={18} />
                  <span className="text-sm">Wishlist</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <Share2 size={18} />
                  <span className="text-sm">Share</span>
                </button>
              </div> */}

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {product.description}
              </p>

              {/* Product ID */}
              <div className="text-sm">
                <span className="text-foreground font-semibold">
                  Product ID:{" "}
                </span>
                <span className="text-muted-foreground uppercase">
                  {product.id}
                </span>
              </div>

              {/* Price Section */}
              <div className="flex items-center gap-2 py-4 border-y">
                <IndianRupee size={22} className="text-accent" />
                <span className="text-3xl lg:text-4xl font-bold text-foreground">
                  {product.price}
                </span>
              </div>

              {/* Includes */}
              <div className="space-y-3">
                <h3 className="font-display text-lg text-foreground">
                  What’s Included
                </h3>

                <ul className="space-y-2">
                  {product.includes?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <CheckCircle
                        size={16}
                        className="text-accent flex-shrink-0 mt-1"
                      />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <WhatsAppButton
                  courseName={product.title}
                  className="flex-1 justify-center py-3"
                />
                <Link
                  to="/contact"
                  className="flex-1 text-center bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
