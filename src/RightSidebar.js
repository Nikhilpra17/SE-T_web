import React from "react";

function RightSidebar() {
  return (
    <div className="flex flex-col p-4 lg:p-8 space-y-4 lg:space-y-6">
      {/* Notification Tool */}
      {/* User Profile */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-2 md:space-y-0">
        {/* Heading */}
        <div>
          <img
            src="/image (27).png"
            alt="User"
            className="rounded w-10 h-10 lg:w-12 lg:h-12"
            style={{
              width: "25px",
              height: "26px",
              top: "49px",
              left: "1012px",
              gap: "0px",
              opacity: "0px",
            }}
          />
          <div
            className="position: absolute;"
            style={{
              width: "10px",
              height: "10px",
              left: "15px",
              gap: "0px",
              opacity: "0px",
            }}
          >
            🔴
          </div>
        </div>

        {/* Right-side container for View All and Search */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          {/* View All */}
          <div
            className=" bg-white shadow-md relative flex items-center justify-between"
            style={{
              backgroundColor: "#ebf5ff",
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
                // backgroundColor: ,
              }}
            >
              <img
                src="./image (28).png"
                alt="pic"
                className="rounded-xl object-cover"
                style={{
                  width: "40px",
                  height: "40px",
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
                Burno Fernandes
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
                Basic Plan
              </p>
            </div>
            <div className="text-gray-500 text-lg">⋁</div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 lg:space-x-4">
        <div></div>
      </div>
      Static Component
      <div>
        <h3 className="text-lg lg:text-xl font-semibold">Statistics</h3>
        {/* Static content */}
      </div>
      {/* Activity Feed */}
      <div>
        <h3 className="text-lg lg:text-xl font-semibold">Activity</h3>
        {/* Activity feed content */}
      </div>
    </div>
  );
}

export default RightSidebar;
