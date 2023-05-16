import React from "react";
import reactLogo from "../assets/images/react.png";
import js from "../assets/images/js.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import java from "../assets/images/java.png";
import python from "../assets/images/python.png";
import cypress from "../assets/images/cypress.png";
import mysql from "../assets/images/mysql.png";
import firebase from "../assets/images/firebase.png";

const Technologies = () => {
  const technologies = [
    {
      id: 1,
      src: reactLogo,
      title: "React",
      style: "shadow-cyan-400",
    },

    {
      id: 2,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },

    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },

    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-700",
    },

    {
      id: 5,
      src: java,
      title: "Java",
      style: "shadow-blue-400",
    },

    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-amber-300",
    },

    {
      id: 7,
      src: mysql,
      title: "MySQL",
      style: "shadow-sky-900",
    },

    {
      id: 8,
      src: firebase,
      title: "Firebase",
      style: "shadow-amber-400",
    },

    {
      id: 9,
      src: cypress,
      title: "Cypress",
      style: "shadow-neutral-500",
    },
  ];

  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-900 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full min-h-screen text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-gray-700">
            Technologies
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4"> {title} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
