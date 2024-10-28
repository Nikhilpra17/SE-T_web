import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col items-center h-screen px-4 py-6 lg:py-8 space-y-6 lg:space-y-8 bg-white">
      {/* Logo */}
      <div
        className="flex items-center mb-4 lg:mb-8"
        style={{
          width: "121px",
          gap: "0px",
        }}
      >
        <img
          src="./image (30).png"
          alt="logo"
          style={{
            width: "30px",
            height: "30px",
          }}
        />
        <span
          style={{
            width: "121px",
            fontSize: "30px",
            fontWeight: "900",
            letterSpacing: "0.1em",
            color: "#006ED3",
          }}
          className="flex items-center justify-center ml-2"
        >
          <img src="./image (31).png" alt="logo" />
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center space-y-4 lg:space-y-6 text-gray-700">
        {["overview", "course", "resource", "message", "setting"].map(
          (item) => (
            <a
              key={item}
              href={`#${item}`}
              className="flex items-center space-x-2 hover:text-blue-500"
              style={{ padding: "8px 4px" }}
            >
              <img
                src={`/image (${
                  item === "overview"
                    ? "7"
                    : item === "course"
                    ? "8"
                    : item === "resource"
                    ? "9"
                    : item === "message"
                    ? "10"
                    : "12"
                }).png`}
                alt={item}
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
              <span
                style={{
                  width: "62px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              {item === "overview" && (
                <img
                  src="./image (32).png"
                  alt="dot"
                  style={{ width: "8px", height: "8px" }}
                />
              )}
            </a>
          )
        )}
      </nav>

      {/* Profile Image */}
      <div
        className="mt-12 lg:mt-16 mb-4 lg:mb-8"
        style={{
          width: "160.2px",
        }}
      >
        <img
          src="/image (13).png"
          alt="Sidebar Image"
          className="rounded h-auto"
          style={{
            maxWidth: "157.2px",
            maxHeight: "190.46px",
          }}
        />
      </div>

      {/* Spacer for flexible height distribution */}
      <div className="flex-grow"></div>

      {/* Upgrade Plan Section */}
      <div
        className="w-full max-w-xs border border-[#ebf5ff] bg-[#b0d0ee] p-4 rounded-lg"
        style={{ minHeight: "106px" }}
      >
        <div
          className="text-black "
          style={{ fontSize: "14px", fontWeight: "700" }}
        >
          Upgrade Your Plan
        </div>
        <a
          href="#resource"
          className="flex items-center justify-between text-blue-500 mt-2"
          style={{ fontSize: "14px" }}
        >
          <span>
            Go to <b>PRO</b>
          </span>
          <img
            src="/image (33).png"
            alt="Resource"
            className="w-7 h-7"
            style={{ padding: "2px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
