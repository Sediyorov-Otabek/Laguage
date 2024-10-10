import React from "react";

const Filter = () => {
  return (
    <div className="wrapper">
      <div className="flex justify-between items-center flex-wrap gap-5 py-4 border-t border-b border-gray-300 bg-[#FAF1E7] px-5">
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 bg-gray-200 text-gray-700 px-3 py-2 rounded hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v5.172a1 1 0 01-.553.894l-4 2A1 1 0 016 20.827V15a1 1 0 00-.293-.707L1 6.707A1 1 0 011 6V4z"
              />
            </svg>
            <span>Filter</span>
          </button>
          <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <p className="text-gray-500">Showing 1–16 of 32 results</p>

        <div className="flex space-x-4 items-center flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Show</span>
            <input
              type="number"
              className="border border-gray-300 rounded px-2 py-1 w-16"
              defaultValue={16}
            />
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Sort by</span>
            <select
              className="border border-gray-300 rounded px-4 py-2 bg-white text-gray-700"
              defaultValue="default"
            >
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
