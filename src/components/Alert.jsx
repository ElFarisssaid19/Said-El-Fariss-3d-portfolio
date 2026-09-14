import { useEffect } from "react";
import { motion } from "framer-motion";

const Alert = ({ type = "success", message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  const accent = type === "success" ? "bg-green-400" : "bg-red-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 inset-x-0 mx-auto w-fit max-w-[90vw] z-50"
    >
      <div className="flex items-center gap-3 bg-tertiary text-white rounded-2xl shadow-card px-6 py-4">
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${accent}`} />
        <p className="text-[14px] sm:text-[15px] font-medium">{message}</p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          className="text-secondary hover:text-white text-[18px] leading-none ml-2"
        >
          &times;
        </button>
      </div>
    </motion.div>
  );
};

export default Alert;
