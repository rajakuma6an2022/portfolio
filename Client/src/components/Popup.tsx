import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface PopupProps {
  title?: string;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ title, children }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // close popup and go back
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full max-w-md sm:max-w-lg rounded-2xl shadow-2xl p-6 relative"
          style={{
            backgroundColor: "var(--bg)",
            color: "var(--text)",
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
          >
            ✕
          </button>

          {/* Title */}
          {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}

          {/* Popup Content */}
          <div>{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.getElementById("portal-root")!
  );
};

export default Popup;
