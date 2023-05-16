import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import MyPic from "../assets/images/picture.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b
     from-black via-black to-gray-900 text-white"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
         justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-80">
          <h2 className="text-4xl sm:text-7xl">Hi! I'm Alan Vadlakunta</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a final year Software Engineering student at Concordia
            University in Montreal.
          </p>

          <div>
            <Link
              className="group text-white w-fit px-6 py-3
                    my-2 flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer"
              to="projects"
              smooth={(true, "easeInOutQuart")}
              duration={2000}
              offset={-80}
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={15} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-2/3 md:w-2/3">
          <img
            src={MyPic}
            alt="My Profile Pic"
            className="rounded-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
