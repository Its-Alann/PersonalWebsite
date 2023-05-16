import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
      offset: -80,
    },
    {
      id: 4,
      link: "technologies",
    },

    {
      id: 5,
      link: "experience",
    },
  ];

  return (
    <div
      className="flex justify-between items-center
    w-full h-20 px-4 text-white bg-black fixed z-10"
    >
      <div>{/* <h1 className='text-3xl ml-2'> Alan </h1> */}</div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, offset }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
             text-gray-500 hover:scale-105 duration-200"
          >
            <Link
              to={link}
              smooth={(true, "easeInOutQuart")}
              duration={2000}
              offset={offset}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center
                absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black 
                 via-black to-gray-900 text-gray-500"
        >
          {links.map(({ id, link, offset }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6
                    text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth={(true, "easeInOutQuart")}
                duration={2000}
                offset={offset}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
