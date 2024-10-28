import React from "react";

const statisticsData = [
  { subheading: "Courses Completed", number: "02", lineColor: "#369FFF" },
  { subheading: "Total Points Gained", number: "250", lineColor: "#FF5733" },
  { subheading: "Courses In Progress", number: "03", lineColor: "#FFC300" },
  { subheading: "Task Finished", number: "05", lineColor: "#DAF7A6" },
];

function Statistics() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      {/* Heading */}
      <h3 className="text-xl font-semibold mb-4">Statistics</h3>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {statisticsData.map((item, index) => (
          <div
            key={index}
            className="w-[180px] h-[180px] bg-gray-100 rounded-[20px] shadow-md flex flex-col justify-center p-4 relative"
          >
            <h4 className="font-[Manrope] text-[16px] font-medium leading-[21.86px] mb-4">
              {item.subheading}
            </h4>

            <div className="flex items-center justify-between">
              <div
                className="w-[4px] h-[30px] rounded-[20px_0px_0px_0px]"
                style={{ backgroundColor: item.lineColor }}
              ></div>
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
