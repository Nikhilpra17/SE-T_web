import React from "react";

const statisticsData = [
  { subheading: "Courses Completed", number: "02" },
  { subheading: "Total Points Gained", number: "250" },
  { subheading: "Courses In Progress", number: "03" },
  { subheading: "Task Finished", number: "05" },
];

function Statistics() {
  return (
    <div className=" bg-white rounded-lg  space-y-4">
      <h3 className="text-2xl font-bold mb-4">Statistics</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {statisticsData.map((item, index) => (
          <div
            key={index}
            className="w-[180px] h-[180px] bg-[#ebf5ff] rounded-[20px] shadow-md flex flex-col justify-center p-4 relative"
          >
            <h4 className="text-[18px] font-medium leading-[21.86px] mb-4">
              {item.subheading.split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  {i === 0 ? <br /> : null}{" "}
                </span>
              ))}
            </h4>

            <div className="flex items-center justify-between">
              <div
                className="w-[4px] h-[30px] rounded-[20px_0px_0px_0px]"
                style={{ backgroundColor: "#369fff" }}
              ></div>
              <p className=" text-[40px] font-bold leading-[54.64px]">
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
