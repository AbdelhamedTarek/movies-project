const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700">Page Not Found!</p>
        <a
          href="/"
          className="mt-4 inline-block text-lg text-blue-500 hover:underline"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
