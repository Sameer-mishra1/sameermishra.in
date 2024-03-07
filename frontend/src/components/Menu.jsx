import { useState } from "react";
import { Handles } from "./Handles";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div>
        {/* Hamburger icon */}
        <div className="fixed m-5 z-50">
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
                  strokeWidth="3"
                />
                <line
                  id="Line_2"
                  data-name="Line 2"
                  x2="28"
                  transform="translate(24.5 40.5)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                />
              </g>
            </svg>
          )}
        </div>

        {/* X icon */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 h-screen"></div>
        )}
        {/* Menu */}
        <div
          className={`fixed inset-0 z-50 flex flex-col justify-center items-center backdrop-blur-xl ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="rounded-lg p-8 text-white text-center w-4/5 max-w-sm flex justify-center">
            <ul className="flex flex-col items-center justify-center h-3/5 text-2xl font-['Poppins']">
              <li className="py-5" onClick={() => scrollToSection("home")}>
                Home
              </li>
              <li className="py-5" onClick={() => scrollToSection("aboutMe")}>
                About Me
              </li>
              <li className="py-5" onClick={() => scrollToSection("projects")}>
                Projects
              </li>
              <li className="py-5" onClick={() => scrollToSection("contact")}>
                Contact
              </li>
              <li className="py-5" onClick={() => scrollToSection("blogs")}>
                Blogs
              </li>
              <li className="py-5" onClick={() => scrollToSection("downloads")}>
                Downloads
              </li>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 absolute top-4 left-4 cursor-pointer"
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
          {/* Add Handles in Menu */}
          {isOpen && <div className="flex items-center space-x-4">
            <Handles />
          </div>}
        </div>
      </div>
    </>
  );
};
