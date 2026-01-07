import React from "react";

const ProcessStep = ({ title, description, Icon }) => (
  <li className="flex flex-col md:flex-row items-start md:items-center mb-10 md:mb-0">
    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-md">
        <Icon />
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800">
        {title}
      </h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </li>
);

export default ProcessStep;
