import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b
     from-gray-900 to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-700">
            About
          </p>
        </div>

        <p className="text-xl">
          Hey there! It seems you've stumbled upon my website. I’m Alan
          Vadlakunta, a Software Engineering graduate from Concordia University
          in Montreal and a Backend Software Engineer with experience in
          algorithmic trading, data pipelines, and scalable backend systems.
        </p>

        <p className="text-xl mt-10">
          I’ve worked on building real-time and batch data systems, REST APIs,
          and full-stack applications using technologies like Java, Python, Go,
          React, and AWS. My background spans finance and enterprise
          environments, where I focus on writing reliable, performant code and
          turning complex workflows into maintainable software.
        </p>

        <p className="text-xl mt-10">
          Beyond my professional work, I’m a creative problem-solver at heart.
          In my free time, I enjoy flying drones, making music, and running a
          small 3D printing service. These projects allow me to blend creativity
          with engineering and continuously challenge myself outside of
          traditional software development.
        </p>

        <p className="text-xl mt-10">
          I’m always eager to learn, explore new technologies, and push my
          boundaries, whether that’s through building new systems, refining
          existing ones, or experimenting with creative side projects.
        </p>
      </div>
    </div>
  );
};

export default About;
