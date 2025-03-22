import React from "react";

const TableComponent = () => {
  return (
    <div className="p-4">
      <div className="flex justify-end mb-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add data</button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-black text-white">
            <th className="px-4 py-2 text-left">id</th>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">email</th>
            <th className="px-4 py-2 text-left">Job</th>
            <th className="px-4 py-2 text-left">Number</th>
          </tr>
        </thead>
        <tbody>
          {/* Data rows will be added here */}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
