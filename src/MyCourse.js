import React from "react";

function MyCourse() {
  return (
    <div className="rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-2 md:space-y-0">
        <h3 className="text-3xl font-bold">My Course</h3>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-60 space-y-2 md:space-y-0">
          <button className="text-blue-500 hover:text-blue-700">
            View All
          </button>
          <div className="flex">
            <img
              src="./image (34).png"
              alt="search"
              style={{ width: "20px", height: "20px" }}
            />
            <input
              type="text"
              placeholder="Search..."
              className="rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full md:w-auto"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div
          className="w-[300px] h-[150px] bg-white rounded-lg shadow-lg relative p-4 flex flex-col justify-between transition-transform transform hover:scale-105"
          style={{
            backgroundColor: "#369FFF",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
          }}
        >
          <div>
            <h4 className="font-bold text-[20px] text-white leading-[27.32px] text-left">
              French
            </h4>
            <p className="text-sm text-white">35 lessons</p>
          </div>

          <div className="relative flex items-center justify-center w-[67px] h-[67px]">
            <svg width="67" height="67" viewBox="0 0 250 250">
              <circle
                cx="125"
                cy="125"
                r="115"
                fill="none"
                stroke="#5394fd"
                strokeWidth="20"
              ></circle>
              <circle
                className="circle-fg"
                cx="125"
                cy="125"
                r="115"
                fill="none"
                stroke="#fff"
                strokeWidth="20"
                style={{
                  transform: "rotate(0deg)",
                  transformOrigin: "125px 125px",
                  strokeDasharray: "720",
                  strokeDashoffset: "180",
                  transition: "stroke-dashoffset 0.5s ease",
                }}
              ></circle>
            </svg>
            <div
              className="absolute text-white font-semibold"
              style={{
                fontSize: "14px",
              }}
            >
              75%
            </div>
          </div>

          <div className="absolute top-[24px] right-[16px] w-[50px] h-[110px] rounded">
            <img src="./image (18).png" alt="paris" />
          </div>
        </div>

        <div
          className="w-[300px] h-[150px] bg-white rounded-lg shadow-lg relative p-4 flex flex-col justify-between transition-transform transform hover:scale-105"
          style={{
            backgroundColor: "#FF993A",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
          }}
        >
          <div>
            <h4 className="font-bold text-[20px] text-white leading-[27.32px] text-left ">
              Portuguese
            </h4>
            <p className="text-sm text-white">30 lessons</p>
          </div>
          <div className="relative flex items-center justify-center w-[67px] h-[67px]">
            <svg width="67" height="67" viewBox="0 0 250 250">
              <circle
                cx="125"
                cy="125"
                r="115"
                fill="none"
                stroke="#fff"
                strokeWidth="20"
              ></circle>
              <circle
                className="circle-fg"
                cx="125"
                cy="125"
                r="115"
                fill="none"
                stroke="#fa7f08"
                strokeWidth="20"
                style={{
                  transform: "rotate(0deg)",
                  transformOrigin: "125px 125px",
                  strokeDasharray: "360",
                  strokeDashoffset: "180",
                  transition: "stroke-dashoffset 0.5s ease",
                }}
              ></circle>
            </svg>
            <div
              className="absolute text-white font-semibold"
              style={{
                fontSize: "14px",
              }}
            >
              75%
            </div>
          </div>
          <div className="absolute top-[36px] right-[24px] w-[55px] h-[110px] rounded">
            <img src="./image (19).png" alt="portugese" />
          </div>
        </div>

        <div
          className="w-[300px] h-[150px] bg-white rounded-lg shadow-lg relative p-4 flex flex-col justify-between transition-transform transform hover:scale-105"
          style={{
            backgroundColor: "#8AC53E",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
          }}
        >
          <div>
            <h4 className="font-bold text-white text-[20px] leading-[27.32px] text-left ">
              Italian
            </h4>
            <p className="text-sm text-white">20 lessons</p>
          </div>
          <div className="relative flex items-center justify-center w-[67px] h-[67px]">
            <svg width="67" height="67" viewBox="0 0 250 250">
              <circle
                cx="125"
                cy="125"
                r="115"
                fill="none"
                stroke="#fff"
                strokeWidth="20"
              ></circle>
              <circle
                className="circle-fg"
                cx="125"
                cy="125"
                r="115"
                fill="none"
                stroke="#6eb23d"
                strokeWidth="20"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "125px 125px",
                  strokeDasharray: "720",
                  strokeDashoffset: "180",
                  transition: "stroke-dashoffset 0.5s ease",
                }}
              ></circle>
            </svg>
            <div
              className="absolute text-white font-semibold"
              style={{
                fontSize: "14px",
              }}
            >
              75%
            </div>
          </div>
          <div className="absolute top-[28px] right-[16px] w-[67px] h-[110px] rounded">
            <img src="./image (20).png" alt="italy" />
          </div>
        </div>

        <div
          className="w-[300px] h-[150px] bg-white rounded-lg shadow-lg relative p-4 flex flex-col justify-between transition-transform transform hover:scale-105"
          style={{
            backgroundColor: "#FFD143",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
          }}
        >
          <div>
            <h4 className="font-bold text-[20px] text-white leading-[27.32px] text-left ">
              German
            </h4>
            <p className="text-sm text-gray-500">40 lessons</p>
          </div>
          <div className="relative flex items-center justify-center w-[67px] h-[67px]">
            <svg width="67" height="67" viewBox="0 0 250 250">
              <circle
                cx="125"
                cy="125"
                r="115"
                fill="none"
                stroke="#fff"
                strokeWidth="20"
              ></circle>
              <circle
                className="circle-fg"
                cx="125"
                cy="125"
                r="115"
                fill="none"
                stroke="#fec003"
                strokeWidth="20"
                style={{
                  transform: "rotate(0deg)",
                  transformOrigin: "125px 125px",
                  strokeDasharray: "720",
                  strokeDashoffset: "180",
                  transition: "stroke-dashoffset 0.5s ease",
                }}
              ></circle>
            </svg>
            <div
              className="absolute text-white font-semibold"
              style={{
                fontSize: "14px",
              }}
            >
              75%
            </div>
          </div>
          <div className="absolute top-[42px] right-[16px] w-[90px] h-[110px] rounded">
            <img src="./image (22).png" alt="german" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCourse;
