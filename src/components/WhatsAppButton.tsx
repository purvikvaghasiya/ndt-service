import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  courseName?: string;
  variant?: "default" | "fixed";
  className?: string;
}

const WhatsAppButton = ({
  courseName,
  variant = "default",
  className = "",
}: WhatsAppButtonProps) => {
  const phoneNumber = "919428194318"; // Replace with actual number
  const message = courseName
    ? `Hello! I am interested in the ${courseName} course. Please share details.`
    : "Hello! I am interested in your courses. Please share details.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (variant === "fixed") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        aria-label="WhatsApp Inquiry"
      >
        <MessageCircle size={24} fill="white" />
        <span className="hidden sm:inline font-semibold">WhatsApp Inquiry</span>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BD5A] transition-all hover:shadow-md ${className}`}
    >
      <MessageCircle size={20} />
      WhatsApp Inquiry
    </a>
  );
};

export default WhatsAppButton;
