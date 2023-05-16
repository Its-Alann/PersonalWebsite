import React from "react";
import hireme from "../assets/images/hireme.png";
import heagle from "../assets/images/heagle.png";
import handle from "../assets/images/handle.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: hireme,
      title: "HIREME",
      code: "https://github.com/Its-Alann/SOEN390-Project-Team8",
      demo: "https://team-ate.web.app/",
    },

    {
      id: 2,
      src: handle,
      title: "Handle",
      code: "https://github.com/Its-Alann/Handle",
      demo: "https://adamoorsini.com/Handle/",
    },

    {
      id: 3,
      src: heagle,
      title: "Heagle",
      code: "https://github.com/Its-Alann/Heagle",
      demo: "",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-700">
            Projects
          </p>
          <p className="py-6"> Check out some of my work </p>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, code, demo }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-500 hover:scale-105"
            >
              <img src={src} alt="" className="rounded-md duration-200" />
              <div className="flex items-center justify-center mt-3">
                <p className="text-white-700 text-md">{title}</p>
              </div>

              <div className="flex items-center justify-center">
                {demo !== "" ? (
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                    onClick={() => window.open(demo, "_blank")}
                  >
                    Demo
                  </button>
                ) : (
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 cursor-not-allowed text-gray-600"
                    disabled
                  >
                    Demo
                  </button>
                )}

                {code !== "" ? (
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                    onClick={() => window.open(code, "_blank")}
                  >
                    Code
                  </button>
                ) : (
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Code
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
