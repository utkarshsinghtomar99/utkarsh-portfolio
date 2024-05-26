import SectionTitle from "../SectionTitle";
import { useState } from "react";
import { useSelector } from "react-redux";

const Projects = () => {
  // {---
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.portfolio);
  const { projects } = portfolioData;
  // ---}

  return (
    <>
      <SectionTitle title={`Projects`} />
      <div className="flex py-10 gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#0a7e65a9] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.length 
            ? projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedItemIndex(index)}
                  className=" cursor-pointer"
                >
                  <h1
                    className={`text-xl px-5 ${
                      selectedItemIndex === index
                        ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#12806473] py-3"
                        : "text-white"
                    }`}
                  >
                    {project.title}
                  </h1>
                </div>
              ))
            : (<>
              <h1
                    className= "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#12806473] py-3"
                  >
                    ❌
                  </h1>
            </>)
            }
        </div>
        {
          projects.length
          ? <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            // src={projects[selectedItemIndex].image}
            src={projects[selectedItemIndex].image}
            alt="..."
            className="h-60 w-72"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              <a href={projects[selectedItemIndex].link}>
                {projects[selectedItemIndex].title}
              </a>
              {/* Here is project title */}
            </h1>
            <p className="text-white">
              {projects[selectedItemIndex].description}
              {/* Heere is the project description */}
            </p>
          </div>
        </div>
          : (<>
            <div className=" h-40 flex items-center justify-center">
            <h1 className="text-3xl p-5 font-bold text-center bg-red-200 rounded-xl text-red-700">
              No Projects Detected
            </h1>
          </div>
          </>)
        }
      </div>
    </>
  );
};

export default Projects;
