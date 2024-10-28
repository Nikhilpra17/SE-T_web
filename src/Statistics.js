import React from "react";

const staticsData = [
  { subheading: "Total Users", number: "1.5K", lineColor: "#369FFF" },
  { subheading: "Monthly Revenue", number: "$45K", lineColor: "#FF5733" },
  { subheading: "Total Sales", number: "8.2K", lineColor: "#FFC300" },
  { subheading: "New Signups", number: "350", lineColor: "#DAF7A6" },
];

function Statistics() {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      {/* Heading */}
      <h3 className="text-xl font-semibold mb-4">Statics</h3>

      {/* Statics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {staticsData.map((item, index) => (
          <div
            key={index}
            className="w-[180px] h-[180px] bg-white rounded-[20px] shadow-md flex flex-col justify-center p-4 relative"
          >
            {/* Subheading */}
            <h4 className="font-[Manrope] text-[16px] font-medium leading-[21.86px] mb-4">
              {item.subheading}
            </h4>

            {/* Line and Number */}
            <div className="flex items-center justify-between">
              {/* Vertical Line */}
              <div
                className="w-[4px] h-[30px] rounded-[20px_0px_0px_0px]"
                style={{ backgroundColor: item.lineColor }}
              ></div>

              {/* Number */}
              <p className="font-[Manrope] text-[40px] font-bold leading-[54.64px]">
                {item.number}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
