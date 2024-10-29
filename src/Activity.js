import React from "react";

function Activity() {
  return (
    <div className="p-2 bg-white rounded-lg  space-y-4">
      <div className="flex justify-between items-center mt-4 mb-24 ">
        <h3 className=" text-[24px] font-bold leading-[32.78px] text-[#303030]">
          Activity
        </h3>

        <div className="flex space-x-4 text-[14px] font-medium leading-[19.12px]">
          <span className="text-gray-500 cursor-pointer">Day</span>
          <span className="text-blue-500 cursor-pointer">Week</span>
          <span className="text-gray-500 cursor-pointer">Month</span>
        </div>
      </div>

      <div className="flex items-end space-x-2 justify-between w-full h-[280px] p-4 rounded-[20px] ">
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] opacity-[0.2] w-[30px] h-[200px] rounded-[40px]"></div>
          <span className="mt-2 text-sm text-gray-600">Mon</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] opacity-[0.2] w-[30px] h-[180px] rounded-[40px]"></div>
          <span className="mt-2 text-sm text-gray-600">Tue</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] opacity-[0.2] w-[30px] h-[150px] rounded-[40px]"></div>
          <span className="mt-2 text-sm text-gray-600">Wed</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] w-[30px] h-[250px] rounded-[40px]"></div>{" "}
          <span className="mt-2 text-sm text-gray-600">Thurs</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] opacity-[0.2] w-[30px] h-[170px] rounded-[40px]"></div>
          <span className="mt-2 text-sm text-gray-600">Fri</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] opacity-[0.2] w-[30px] h-[200px] rounded-[40px]"></div>
          <span className="mt-2 text-sm text-gray-600">Sat</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#369FFF] opacity-[0.2] w-[30px] h-[175px] rounded-[40px]"></div>
          <span className="mt-2 text-sm text-gray-600">Sun</span>
        </div>
      </div>
    </div>
  );
}

export default Activity;
