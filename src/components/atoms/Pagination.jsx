import React from "react";
import { motion } from "framer-motion";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <motion.div
      className="flex justify-center space-x-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-md ${
            page === currentPage
              ? "border border-blue-800 bg-blue-600 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-blue-200"
          }`}
        >
          {page}
        </button>
      ))}
    </motion.div>
  );
};

export default Pagination;
