import React from "react";

function Activity() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      {/* Heading */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-[Manrope] text-[24px] font-bold leading-[32.78px] text-[#303030]">
          Activity
        </h3>

        {/* Day, Week, Month Options */}
        <div className="flex space-x-4 text-[14px] font-medium leading-[19.12px]">
          <span className="text-gray-500 cursor-pointer">Day</span>
          <span className="text-blue-500 cursor-pointer">Week</span>
          <span className="text-gray-500 cursor-pointer">Month</span>
        </div>
      </div>

      {/* Vertical Bar Graph */}
      <div className="flex items-end space-x-2 justify-between w-full h-[280px] p-4 rounded-[20px]">
        {/* Bars for each day */}
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] opacity-[0.2] w-[30px] h-[120px] rounded-[40px]"></div>
          <span className="mt-2 text-sm text-gray-600">Mon</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] opacity-[0.2] w-[30px] h-[100px] rounded-[40px]"></div>
          <span className="mt-2 text-sm text-gray-600">Tue</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] opacity-[0.2] w-[30px] h-[70px] rounded-[40px]"></div>
          <span className="mt-2 text-sm text-gray-600">Wed</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] w-[30px] h-[250px] rounded-[40px]"></div>{" "}
          {/* Highlighted */}
          <span className="mt-2 text-sm text-gray-600">Thurs</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] opacity-[0.2] w-[30px] h-[90px] rounded-[40px]"></div>
          <span className="mt-2 text-sm text-gray-600">Fri</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] opacity-[0.2] w-[30px] h-[110px] rounded-[40px]"></div>
          <span className="mt-2 text-sm text-gray-600">Sat</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] opacity-[0.2] w-[30px] h-[95px] rounded-[40px]"></div>
          <span className="mt-2 text-sm text-gray-600">Sun</span>
        </div>
      </div>
    </div>
  );
}

export default Activity;
