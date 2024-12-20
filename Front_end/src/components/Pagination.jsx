import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => onPageChange(currentPage - 1);
  const handleNext = () => onPageChange(currentPage + 1);

  return (
    <div className="flex justify-between items-center mt-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={handlePrev}
      >
        Previous
      </button>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
