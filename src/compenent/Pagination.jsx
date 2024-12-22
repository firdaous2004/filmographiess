const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
      if (currentPage > 1) onPageChange(currentPage - 1);
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) onPageChange(currentPage + 1);
    };
  
    return (
      <div className="pagination">
        <button onClick={handlePrevious}>&lt;</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={handleNext}>&gt;</button>
      </div>
    );
  };
  
  export default Pagination;

  