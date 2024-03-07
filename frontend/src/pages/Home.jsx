import Sameer from "../assets/Sameer.png";
import { Handles } from "../components/Handles";
import { Menu } from "../components/Menu";
import aboutMe from "../assets/AboutMe.svg";

export const Home = () => {
  return (
    <>
      <div id="home" className={`bg-neutral-800 h-screen flex flex-col`}>
        {/* Menu */}
        <Menu />
        {/* Photo */}
        <div className="p-9">
          <img src={Sameer} className="drop-shadow-2xl" />
        </div>
        <div className="flex flex-col justify-center w-full">
          {/* Name */}
          <div className="flex w-full justify-center text-zinc-600 font-['Poppins']">
            <p>HI I'M</p>
          </div>
          <div className="text-3xl flex w-full justify-center font-['Poppins']">
            <h3 className="text-stone-300">SAMEER MISHRA</h3>
          </div>
          {/* Introduction */}
          <div className="flex w-full justify-center p-6 text-center text-zinc-500 font-['Poppins']">
            <h6>
              A PASSIONATE FULL-STACK DEVELOPER & AN ASPIRING ENTREPRENEUR
            </h6>
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-3">
            <Handles />
          </div>
          {/* Scroll Icon */}
          <div className="flex justify-center mt-8">
            <a href="#aboutMe">
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
            </a>
          </div>
        </div>
      </div>

      {/* Further sections */}

      {/* About Me */}
      <div
        id="aboutMe"
        className="h-screen bg-neutral-800 font-['Poppins'] text-center"
      >
        <div className="text-white text-2xl flex justify-center pt-8">
          About Me
        </div>
        <div className="flex justify-center pt-16">
          <img src={aboutMe} className="w-48 h-48 drop-shadow-2xl" />
        </div>
        <div className="pt-8">
          <p className="m-5 text-white">
            Hi, I love the fact that such tools and technologies exist which
            help us in turning our imagination into a reality! <br /> <br />
            To be able to do that, I try to keep honing my skillset everyday. I
            am truly fascinated by the power that technology and innovation
            holds and so I love to explore its endless possibilities. <br />{" "}
            <br />
            While I was in college, I got to work wuth (& launch) multiple
            startups. That's how I started gravitating towards Software &
            Web-Development. Thus, I have multi-disciplinary skills and varied
            interests.
            <br />
          </p>
          <p className="m-5 text-white">
            I love reading about new technologies, philosophy, startups &
            entrepreneurship!
          </p>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="h-screen bg-neutral-800">
        <div className="text-white text-2xl flex justify-center pt-8">
          Projects
        </div>
      </div>
      <div id="contact" className="h-screen bg-neutral-800">
        <div className="text-white text-2xl flex justify-center pt-8">
          Contact
        </div>
      </div>
      <div id="blogs" className="h-screen bg-neutral-800">
        <div className="text-white text-2xl flex justify-center pt-8">
          Blogs
        </div>
      </div>
      <div id="downloads" className="h-screen bg-neutral-800">
        <div className="text-white text-2xl flex justify-center pt-8">
          Downloads
        </div>
      </div>
    </>
  );
};
