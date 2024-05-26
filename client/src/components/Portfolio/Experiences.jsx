import { useState } from "react";
import SectionTitle from "../SectionTitle";
import { useSelector } from "react-redux";

const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const { portfolioData } = useSelector((state) => state.portfolio);

  const { experiences } = portfolioData;

  return (
    <>
      <SectionTitle title={`Experiences`} />
      <div className="flex py-10 gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#0a7e65a9] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.length
            ? experiences.map((experience, index) => (
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
                    {experience.period}
                  </h1>
                </div>
              ))
            : "No Info"}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experiences.length
              ? experiences[selectedItemIndex].title
              : "No Info"}
            {/* Here is the title */}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences.length
              ? experiences[selectedItemIndex].company
              : "No Info"}
            {/* here is the company */}
          </h1>
          <p className="text-white">
            {experiences.length
              ? experiences[selectedItemIndex].description
              : "No Info"}
            {/* here is the description */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Experiences;
