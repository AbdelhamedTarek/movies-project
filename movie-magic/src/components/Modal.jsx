/* eslint-disable react/prop-types */
const Modal = ({ onClose, selectedMovie }) => {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60"
      >
        <div className="relative bg-white rounded-lg p-6 w-11/12 max-w-[800px] shadow-lg max-h-[90vh] overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {selectedMovie.original_title}
          </h2>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <img
                src={
                  selectedMovie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
                    : "https://via.placeholder.com/500x750"
                }
                alt={selectedMovie.original_title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Details Section */}
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="mb-2">
                <strong>Plot:</strong>{" "}
                {selectedMovie.overview || "No overview available."}
              </p>
              <p className="mb-2">
                <strong>Release Year:</strong>{" "}
                {new Date(selectedMovie.release_date).getFullYear() || "N/A"}
              </p>
              <p className="mb-2">
                <strong>Rating:</strong> {selectedMovie.vote_average || "N/A"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
