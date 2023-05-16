import React from "react";

const Experience = () => {
  const experience = [
    {
      id: 1,
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
      id: 2,
      company: "Small Business Owner",
      location: "Saint-Lazare, QC",
      position: "Local 3D Printing Service",
      duration: "Apr 2022 - Present",
      description: [
        "Designed and printed 3D models for clients to satisfy their requests.",
        "Optimized and sliced over 50 3D models using UltiMaker Cura.",
        "Generated sales in Canada and USA with over 60% profit margins through ecommerce websites.",
      ],
      utilized: "",
    },

    {
      id: 3,
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
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-screen"
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
                  <p className="font-bold text-2xl"> {company} </p>
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
                    <div className="mr-2"> - </div>
                    <div>{item}</div>
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
