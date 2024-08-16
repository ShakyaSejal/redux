import React, { useState } from "react";

const AddTodoForm = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <form className="flex flex-col space-y-4 bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
        <label htmlFor="search" className="text-lg font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddTodoForm;
