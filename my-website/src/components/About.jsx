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

        <p className="text-xl mt-20">
          Hey there! It seems you've stumbled upon my website. My name is Alan
          Vadlakunta, and I'm a final year Software Engineering student at
          Concordia University in Montreal.
        </p>

        <p className="text-xl mt-10">
          I'm a creative soul who loves tackling challenges and exploring
          different fields. In my free time, you'll find me flying drones,
          making music, and running my own 3D printing business. Coding is also
          a passion of mine, as I enjoy building programs that showcase my
          skills and creativity. I'm all about expanding my horizons and honing
          my craft. I thrive on learning new things and pushing my boundaries.
          Whether it's diving into new projects or expressing myself through
          various mediums, I'm constantly seeking ways to fuel my creativity.
        </p>

        <p className="text-xl mt-10">
          I have developped a strong skill in project management through my
          school projects. I have led multiple team projects to build full stack
          web applications of varying team sizes of 4 to 9 students. I have
          experience with technologies such as React, JavaScript, Python and
          Java. I also have experience with CI/CD through GitHub Actions and
          testing framworks such as Cyrpess.
        </p>
      </div>
    </div>
  );
};

export default About;
