import React from "react";

const TotalItems = ({roll , name ,status}) => {
  return (
    <>
      <li className=" bg-slate-100  list-none p-5">
        <div className="flex justify-between items-center">

          <span>
            <input type="checkbox" />
          </span>
          {name}

          <button className=" bg-red-500 border rounded px-2 py-1">
            Delete
          </button>
        </div>
      </li>


    </>
  );
};

export default TotalItems;
