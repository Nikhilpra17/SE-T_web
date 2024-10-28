import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col items-center py-4 lg:py-8 space-y-6 lg:space-y-8">
      {/* Logo */}
      <div
        className="mb-4 lg:mb-8 flex items-center"
        style={{ top: "44px", left: "98px", gap: "0px" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 lg:h-12 lg:w-12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.04899 11H7.01599C7.10199 8.26701 7.54199 5.77701 8.23199 3.88001C8.40899 3.39401 8.60599 2.93501 8.82499 2.51501C5.16199 3.74001 2.44399 7.02801 2.04899 11ZM12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 2C11.849 2 11.576 2.081 11.201 2.516C10.83 2.948 10.45 3.632 10.111 4.563C9.51401 6.207 9.10301 8.456 9.01701 11H14.983C14.897 8.456 14.486 6.207 13.889 4.563C13.55 3.632 13.17 2.948 12.799 2.516C12.424 2.081 12.151 2 12 2ZM16.984 11C16.897 8.26701 16.458 5.77701 15.768 3.88001C15.591 3.39401 15.394 2.93501 15.175 2.51501C18.838 3.74001 21.556 7.02801 21.951 11H16.984ZM14.983 13H9.01701C9.10301 15.544 9.51401 17.793 10.111 19.437C10.45 20.368 10.83 21.052 11.201 21.484C11.576 21.919 11.849 22 12 22C12.151 22 12.424 21.919 12.799 21.484C13.17 21.052 13.55 20.368 13.889 19.437C14.486 17.793 14.897 15.544 14.983 13ZM15.175 21.485C15.394 21.065 15.591 20.606 15.768 20.12C16.458 18.223 16.897 15.733 16.984 13H21.951C21.556 16.972 18.838 20.26 15.175 21.485ZM8.82499 21.485C8.60599 21.065 8.40899 20.606 8.23199 20.12C7.54199 18.223 7.10199 15.733 7.01599 13H2.04899C2.44399 16.972 5.16199 20.26 8.82499 21.485Z"
            fill="#369FFF"
          />
        </svg>
        <span
          style={{
            width: "121px",
            height: "37px",
            opacity: "1",
            fontFamily: "Gilroy",
            fontSize: "30px",
            fontWeight: "900",
            lineHeight: "37.44px",
            letterSpacing: "0.1em",
            textAlign: "left",
            color: "#006ED3",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          S E * T
        </span>
      </div>

      {/* Navigation */}
      <nav
        className="flex flex-col items-center space-y-2 lg:space-y-4 text-gray-700"
        style={{ width: "145px", height: "281px", top: "206px", left: "44px" }}
      >
        <a
          href="#overview"
          className="hover:text-blue-500 flex items-center space-x-2"
        >
          <img
            src="/image (7).png"
            alt="Overview"
            className="w-6 h-6"
            style={{ padding: "2px 2.5px", opacity: "0px" }}
          />
          <span>Overview</span>
        </a>
        <a
          href="#course"
          className="hover:text-blue-500 flex items-center space-x-2"
        >
          <img
            src="/image (8).png"
            alt="Course"
            className="w-6 h-6"
            style={{ padding: "2px 2.5px", opacity: "0px" }}
          />
          <span>Course</span>
        </a>
        <a
          href="#resource"
          className="hover:text-blue-500 flex items-center space-x-2"
        >
          <img
            src="/image (9).png"
            alt="Resource"
            className="w-6 h-6"
            style={{ padding: "2px 2.5px", opacity: "0px" }}
          />
          <span>Resource</span>
        </a>
        <a
          href="#message"
          className="hover:text-blue-500 flex items-center space-x-2"
        >
          <img
            src="/image (10).png"
            alt="Message"
            className="w-6 h-6"
            style={{ padding: "2px 2.5px", opacity: "0px" }}
          />
          <span>Message</span>
        </a>
        <a
          href="#setting"
          className="hover:text-blue-500 flex items-center space-x-2"
        >
          <img
            src="/image (12).png"
            alt="Setting"
            className="w-6 h-6"
            style={{ padding: "2px 2.5px", opacity: "0px" }}
          />
          <span>Setting</span>
        </a>
      </nav>

      {/* Image */}
      <div
        className="my-4 lg:my-8"
        style={{
          width: "157.2px",
          height: "190.46px",
          //   top: "587px",
          //   left: "40px",

          gap: "0px",
          opacity: "0px",
        }}
      >
        <img
          src="/image (13).png"
          alt="Sidebar Image"
          className="rounded-full w-16 h-16 lg:w-24 lg:h-24"
        />
      </div>

      {/* Upgrade Button */}
      <div className="mt-auto bg-[#b0d0ee] text-white px-3 py-1 lg:px-4 lg:py-2 rounded-lg hover:bg-blue-600">
        <div className="font-black">Upgrade Your Plan</div>
        <a
          href="#resource"
          className="hover:text-blue-500 flex items-center space-x-2"
        >
          <span>
            Got to <b>PRO</b>
          </span>
          <img
            src="/image (9).png"
            alt="Resource"
            className="w-6 h-6"
            style={{ padding: "2px 2.5px", opacity: "0px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
