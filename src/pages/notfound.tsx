const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-center px-4">
      <h1 className="text-4xl sm:text-8xl md:text-[120px] font-bold mb-4">
        404 Not Found
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6">
        Your visited page not found. You may go home page.
      </p>
      <button className="bg-red-500 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-md font-semibold hover:bg-red-600 transition text-sm sm:text-base md:text-lg">
        Back to Home
      </button>
    </div>
  );
};

export default Notfound;
