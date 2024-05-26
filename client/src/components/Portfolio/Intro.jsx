import { useSelector } from "react-redux";

const Intro = () => {
  const { portfolioData } = useSelector((state) => state.portfolio);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, caption, description } = intro;

  return (
    <>
      <div className="h-[100vh] bg-slate-800 flex flex-col items-start justify-center gap-8 py-10">
        <h1 className="text-white">{welcomeText || ""}</h1>
        <h1 className="sm:text-3xl text-7xl text-orange-400 font-semibold">
          {`${firstName || ""} ${lastName || ""}`}
        </h1>
        <h1 className="sm:text-3xl text-7xl text-white font-semibold">
          {caption || ""}
        </h1>
        <p className="text-white w-2/3">{description || ""}</p>
        <button className="border-2 border-cyan-600 text-cyan-600 px-10 py-3 rounded-xl hover:bg-cyan-800 hover:text-white hover:border-cyan-400">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Intro;
