import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import MyPic from "../assets/images/picture.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";

const Home = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/alan-vadlakunta",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Its-Alann",
    },

    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:alanvadlakunta@gmail.com",
    },

    {
      id: 4,
      child: (
        <>
          <FiFileText size={30} />
        </>
      ),
      href: `${process.env.PUBLIC_URL}/Alan_Vadlakunta_CV_2023_v3.pdf`,
      style: "rounded-br-md",
      download: true,
    },
  ];

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
          <h2 className="text-4xl sm:text-6xl">Hi! I'm Alan Vadlakunta</h2>
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

          <div>
            <ul>
              {links.map(({ id, child, href, style, download }) => (
                <li
                  key={id}
                  className={
                    "xl:hidden inline-flex items-center bg-gradient-to-r my-2 mr-2 px-3 py-3 rounded-md from-cyan-500 to-blue-500 cursor-pointer " +
                    style
                  }
                >
                  <a
                    href={href}
                    // className="flex justify-between items-center w-full text-white"
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-2/3 md:w-2/3">
          <img
            src={MyPic}
            alt="My Profile Pic"
            className="rounded-2xl mx-auto mt-8 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
