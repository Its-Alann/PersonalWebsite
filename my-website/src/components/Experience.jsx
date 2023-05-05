import React from "react";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: "",
      title: "HTML",
      style: "shadow-orange-500",
    },

    {
      id: 2,
      src: "",
      title: "JavaScript",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-900 to-black w-fulll h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 bprder-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grod grod-col-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src="" alt="" className="w-20 mx-auto" />
              <p className="mt-4"> {title} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
