import React from "react";

function MyCourse() {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      {/* Header with MyCourse, View All, and Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-2 md:space-y-0">
        {/* Heading */}
        <h3 className="text-xl font-semibold">MyCourse</h3>

        {/* Right-side container for View All and Search */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          {/* View All */}
          <button className="text-blue-500 hover:text-blue-700">
            View All
          </button>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full md:w-auto"
          />
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Course Card - French */}
        <div className="w-[300px] h-[150px] bg-white rounded-lg shadow-md relative p-4 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-[20px] leading-[27.32px] text-left font-[Manrope]">
              French
            </h4>
            <p className="text-sm text-gray-500"> 35 lessons</p>
          </div>
          <div className="relative flex items-center justify-center bg-gray-200 w-[67px] h-[67px] rounded-full text-black font-semibold text-lg">
            75%
          </div>
          <div className="absolute top-[36px] right-[16px] w-[50px] h-[110px] rounded">
            <img src="./image (18).png" alt="paris" />
          </div>
        </div>

        {/* Course Card - Portuguese */}
        <div className="w-[300px] h-[150px] bg-white rounded-lg shadow-md relative p-4 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-[20px] leading-[27.32px] text-left font-[Manrope]">
              Portuguese
            </h4>
            <p className="text-sm text-gray-500">30 lessons</p>
          </div>
          <div className="relative flex items-center justify-center bg-gray-200 w-[67px] h-[67px] rounded-full text-black font-semibold text-lg">
            75%
          </div>
          <div className="absolute top-[36px] right-[16px] w-[50px] h-[110px]  rounded">
            <img src="./image (19).png" alt="portugese" />
          </div>
        </div>

        {/* Course Card - Italian */}
        <div className="w-[300px] h-[150px] bg-white rounded-lg shadow-md relative p-4 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-[20px] leading-[27.32px] text-left font-[Manrope]">
              Italian
            </h4>
            <p className="text-sm text-gray-500">20 lessons</p>
          </div>
          <div className="relative flex items-center justify-center bg-gray-200 w-[67px] h-[67px] rounded-full text-black font-semibold text-lg">
            75%
          </div>
          <div className="absolute top-[36px] right-[16px] w-[50px] h-[110px]  rounded">
            <img src="./image (20).png" alt="italy" />
          </div>
        </div>

        {/* Course Card - German */}
        <div className="w-[300px] h-[150px] bg-white rounded-lg shadow-md relative p-4 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-[20px] leading-[27.32px] text-left font-[Manrope]">
              German
            </h4>
            <p className="text-sm text-gray-500">40 lessons</p>
          </div>
          <div className="relative flex items-center justify-center bg-gray-200 w-[67px] h-[67px] rounded-full text-black font-semibold text-lg">
            75%
          </div>
          <div className="absolute top-[36px] right-[16px] w-[80px] h-[110px]  rounded">
            <img src="./image (22).png" alt="german" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCourse;
