import Sameer from "../assets/Sameer.png";
import { Handles } from "../components/Handles";
import { Menu } from "../components/Menu";

export const Home = () => {
  return (
    <div className={`bg-neutral-800 h-screen flex flex-col`}>
      {/* Menu */}
      <Menu />
      {/* <div className="p-6 ml-2 fixed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </div> */}
      {/* Photo */}
      <div className="p-9 mt-5">
        <img src={Sameer} className="drop-shadow-xl" />
      </div>
      <div className="flex flex-col justify-center w-full">
        {/* Name */}
        <div className="flex w-full justify-center text-zinc-600">
          <p>HI I'M</p>
        </div>
        <div className="text-3xl flex w-full justify-center">
          <h3 className="text-stone-300">SAMEER MISHRA</h3>
        </div>
        {/* Introduction */}
        <div className="flex w-full justify-center p-6 text-center text-zinc-500">
          <h6>A PASSIONATE FULL-STACK DEVELOPER & AN ASPIRING ENTREPRENEUR</h6>
        </div>
        {/* Social Media Icons */}
        <div className="mt-2 flex items-center justify-center space-x-3">
          <Handles />
        </div>
        {/* Scroll Icon */}
        <div className="flex justify-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="37.167"
            height="28.583"
            viewBox="0 0 37.167 28.583"
          >
            <defs>
              <filter
                id="Icon_material-arrow-drop-down"
                x="0"
                y="0"
                width="37.167"
                height="28.583"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dx="6" dy="10" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g
              transform="matrix(1, 0, 0, 1, 0, 0)"
              filter="url(#Icon_material-arrow-drop-down)"
            >
              <path
                id="Icon_material-arrow-drop-down-2"
                data-name="Icon material-arrow-drop-down"
                d="M13.417,19.167,23,28.75l9.583-9.583Z"
                transform="translate(-10.42 -19.17)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
