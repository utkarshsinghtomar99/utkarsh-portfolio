import { useSelector } from "react-redux";
import SectionTitle from "../SectionTitle";
import aboutMe from "../../assets/about-me.png";

const About = () => {
  const { portfolioData } = useSelector((state) => state.portfolio);

  const { about } = portfolioData;

  const { skills, description1, description2 } = about;

  return (
    <section>
      <SectionTitle title={`About`} />
      <div className="flex w-full items-center sm:flex-col gap-x-10">
        <div className="h-[70vh] w-1/2 sm:w-full flex items-center">
          <img
            className=" w-72 rounded-full mx-auto sm:w-60"
            src={aboutMe}
            alt="my avatar profile pic"
          />
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full text-justify">
          <p className="text-white">{description1 || ""}</p>
          <p className="text-white">{description2 || ""}</p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are few technologies I&apos;ve been working with recently
        </h1>
        <div className="flex flex-wrap gap-10 sm:gap-5 mt-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-tertiary py-3 px-10 sm:px-5 rounded-lg hover:bg-cyan-800 hover:border-cyan-300 text-tertiary hover:text-white"
            >
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
