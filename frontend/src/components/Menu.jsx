import { useState } from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div>
        {/* Hamburger icon */}
        <div className="fixed m-5">
          {!isOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="12"
              viewBox="0 0 41 12"
              onClick={toggleMenu}
            >
              <g
                id="Group_4"
                data-name="Group 4"
                transform="translate(-24.5 -30)"
              >
                <line
                  id="Line_1"
                  data-name="Line 1"
                  x2="41"
                  transform="translate(24.5 31.5)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="3"
                />
                <line
                  id="Line_2"
                  data-name="Line 2"
                  x2="28"
                  transform="translate(24.5 40.5)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="3"
                />
              </g>
            </svg>
          )}
        </div>

        {/* X icon */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50"></div>
        )}
        {/* Menu */}
        <div
          className={`fixed inset-0 z-50 flex justify-center items-center ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="rounded-lg p-8 text-white text-center w-4/5 max-w-sm">
            <ul className="flex flex-col items-center justify-center h-3/5">
              <li className="py-4">Home</li>
              <li className="py-4">About Me</li>
              <li className="py-4">Contact</li>
              <li className="py-4">Blogs</li>
              <li className="py-4">Downloads</li>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 absolute top-4 left-4 cursor-pointer"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
