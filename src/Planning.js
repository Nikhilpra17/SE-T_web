import React from "react";

const planningTopics = [
  {
    heading: "Reading - Beginner Topic 1",
    time: "8:00 AM - 10:00 AM",
    img: "./image (23).png",
    imgBoxBG: "#d0e5f9",
  },
  {
    heading: "Reading - Beginner Topic 1",
    time: "01:00 PM - 02:00 PM",
    img: "./image (24).png",
    imgBoxBG: "#f9e4d1",
  },
  {
    heading: "Listening - Advanced Topic 2",
    time: "03:00 PM - 04:00 PM",
    img: "./image (25).png",
    imgBoxBG: "#e1edd2",
  },
  {
    heading: "Speaking - Advanced Topic 3",
    time: "07:00 PM - 08:00 PM",
    img: "./image (26).png",
    imgBoxBG: "#f9efd3",
  },
  {
    heading: "Speaking - Beginner Topic 3",
    time: "8:00 AM - 10:00 AM",
    img: "./image (26).png",
    imgBoxBG: "#f9efd3",
  },
  {
    heading: "Grammar - Beginner Topic 2",
    time: "01:00 PM - 02:00 PM",
    img: "./image (25).png",
    imgBoxBG: "#e1edd2",
  },
  {
    heading: "Reading - Advanced Topic 1",
    time: "03:00 PM - 04:00 PM",
    img: "./image (24).png",
    imgBoxBG: "#f9e4d1",
  },
  {
    heading: "Speaking - Advanced Topic 3",
    time: "07:00 PM - 08:00 PM",
    img: "./image (23).png",
    imgBoxBG: "#d0e5f9",
  },
];

function Planning() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      {/* Header with Planning, View All, and Date */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-2 md:space-y-0">
        <h3 className="text-xl font-semibold">Planning</h3>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <button className="text-blue-500 hover:text-blue-700">
            View All
          </button>
          <span className="text-gray-600">{currentDate}</span>
        </div>
      </div>

      {/* Planning Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {planningTopics.map((topic, index) => (
          <div
            key={index}
            className="w-[300px] h-[80px] bg-white shadow-md relative flex items-center justify-between p-4"
            style={{
              backgroundColor: "#F7F7F7",
              borderRadius: "16px",
              gap: "0px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                top: "604px",
                left: "303px",
                gap: "0px",
                borderRadius: "12px",
                // opacity: 0.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: topic.imgBoxBG,
              }}
            >
              <img
                src={topic.img}
                alt={topic.heading}
                className="rounded-full object-cover"
                style={{
                  width: "24px",
                  height: "24px",
                  top: "722px",
                  left: "316px",
                  gap: "0px",
                  // opacity: 0,
                }}
              />
            </div>

            <div>
              <h4
                className="text-base font-semibold"
                style={{
                  width: "180px",
                  height: "16px",
                  gap: "0px",
                  // opacity: 0,
                  // fontFamily: "Manrope",
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: "16.39px",
                  textAlign: "left",
                }}
              >
                {topic.heading}
              </h4>
              <p
                className="text-xs text-gray-500"
                style={{
                  width: "125px",
                  height: "16px",
                  gap: "0px",
                  // opacity: 0,
                  // fontFamily: "Manrope",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "16.39px",
                  textAlign: "left",
                }}
              >
                {topic.time}
              </p>
            </div>
            <div className="text-gray-500 text-lg">⋮</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planning;
