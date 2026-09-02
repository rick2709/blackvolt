"use client";

import { motion } from "framer-motion";

// +263 772 404 511 in wa.me format (no "+", no spaces).
const WHATSAPP_NUMBER = "263772404511";
const WHATSAPP_MESSAGE = "Hi Black Volt Investments, I'd like to enquire about your services.";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Black Volt Investments on WhatsApp"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.35, delay: 0.4 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.28)] flex items-center justify-center"
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="#fff" className="flex-none">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.475.744 4.775 2.02 6.693L4.5 27.5l5.98-1.484A11.93 11.93 0 0016.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm6.86 16.99c-.29.816-1.44 1.494-2.36 1.69-.63.135-1.45.243-4.22-.907-3.542-1.47-5.822-5.06-6-5.297-.176-.237-1.437-1.913-1.437-3.65s.91-2.59 1.234-2.945c.323-.354.706-.443.94-.443.235 0 .47.002.676.012.216.01.507-.082.793.605.29.7.985 2.414 1.07 2.59.088.176.147.383.03.62-.117.235-.176.383-.353.59-.176.207-.372.462-.53.62-.177.176-.36.368-.155.723.206.354.917 1.51 1.968 2.446 1.352 1.206 2.494 1.58 2.85 1.756.354.176.56.147.766-.088.207-.236.883-1.03 1.118-1.383.235-.354.47-.295.793-.177.324.118 2.05.966 2.402 1.142.353.176.588.265.677.412.088.147.088.85-.202 1.666z" />
      </svg>
    </motion.a>
  );
}
