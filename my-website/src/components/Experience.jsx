import React from "react";

const Experience = () => {
  const experience = [
    {
      id: 1,
      company: "National Bank of Canada - Financial Markets",
      location: "Montreal, QC",
      position: "Analyst",
      duration: "Sept 2024 - Present",
      description: [
        "Converted message queue infrastructure to FIX protocol to streamline communication and reduce order execution latency by 60%.",
        "Maintained constant communication with stakeholders to provide insight on progress and updates.",
        "Implemented robust file parsers to process data from over 30 issuers with varying file formats.",
        "Monitored multiple production applications, resolving issues to prevent disruptions to trading operations.",
      ],
      utilized: "Java, Python, PostgreSQL, SQL, Git",
    },

    {
      id: 2,
      company: "National Bank of Canada - Financial Markets",
      location: "Montreal, QC",
      position: "Software Developer Intern",
      duration: "May 2024 - Aug 2024",
      description: [
        "Implemented comprehensive module to track and manage DMA and Give-ups agreements and payments.",
        "Designed and implemented React.js state machine to monitor component states and mitigate callbacks.",
        "Automated invoice generation to accelerate billing process.",
      ],
      utilized: "Python, React.js, TypeScript, Flask, SQL, Git",
    },

    {
      id: 3,
      company: "ARDXX",
      location: "Remote - Herndon, VA",
      position: "Software Developer",
      duration: "May 2023 - Aug 2023",
      description: [
        "Involved in converting Angular.js platform to React.js for better performance and support.",
        "Implemented role-based user management and defining permissions to control application access.",
        "Developed a bulk import feature to efficiently integrate and process data from multiple vendors.",
      ],
      utilized: "React.js, Java, Jenkins, MySQL, GitLab",
    },

    {
      id: 4,
      company: "Sofvie",
      location: "Montreal, QC",
      position: "Big Data Analyst Intern",
      duration: "Jan 2023 - April 2023",
      description: [
        "Designed machine learning algorithms to evaluate factors that increase employee training completion rate.",
        "Maintained constant communication with stakeholders to provide insight on progress and updates.",
        "Implemented K-Mean and hierarchal clustering using Python’s Scikit-Learn to find common characteristics in employees with high training completion rates",
        "Used Pandas DataFrames to store and manipulate data from MySQL database.",
        "Optimized complex SQL queries to fetch relevant information from MySQL database and compute completion rate per employee.",
      ],
      utilized:
        "Python, Jupyter Notebook, Scikit-Learn, Seaborn, MySQL, Pandas",
    },

    {
      id: 5,
      company: "ARDXX",
      location: "Remote - Herndon, VA",
      position: "Software Developer",
      duration: "May 2022 - Aug 2022",
      description: [
        "Involved in converting Angular.js platform to React.js for better performance and support.",
        "Converted Animal module to React.js.",
        "Implemented dynamic query building to build SQL statements based on user selections.",
      ],
      utilized: "React.js, Java, Jenkins, MySQL, GitLab",
    },

    {
      id: 6,
      company: "Small Business Owner",
      location: "Saint-Lazare, QC",
      position: "Local 3D Printing Service",
      duration: "Apr 2022 - Apr 2024",
      description: [
        "Designed and printed 3D models for clients to satisfy their requests.",
        "Optimized and sliced over 50 3D models using UltiMaker Cura.",
        "Generated sales in Canada and USA with over 60% profit margins through ecommerce websites.",
      ],
      utilized: "",
    },

    {
      id: 7,
      company: "FedEx Supply Chain",
      location: "Coteau-du-Lac, QC",
      position: "Warehouse Associate",
      duration: "June 2019 - Apr 2022",
      description: [
        "Worked either in teams or alone to achieve daily objectives.",
        "Recorded information, shortages, and discrepancies to keep records current and accurate.",
        "Loaded/unloaded materials from skids and other transport vehicles.",
      ],
      utilized: "",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-700">
            Experience
          </p>
        </div>

        {experience.map(
          ({
            id,
            company,
            location,
            position,
            duration,
            description,
            utilized,
          }) => (
            <div key={id} className="mb-6">
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <p className=" bg-gradient-to-r font-bold text-2xl from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                    {company}
                  </p>
                  <p> {location} </p>
                </div>
                <div className="flex justify-between">
                  <p> {position} </p>
                  <p> {duration} </p>
                </div>
              </div>
              <div>
                {description.map((item, index) => (
                  <p key={index} className="flex mb-2">
                    <span className="mr-2"> - </span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>

              {utilized !== "" ? (
                <div className="flex">
                  <p className="underline underline-offset-4 mr-2">
                    {" "}
                    Utilized:{" "}
                  </p>
                  <p> {utilized} </p>
                </div>
              ) : (
                <> </>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
