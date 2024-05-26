import { useDispatch, useSelector } from "react-redux";
import Intro from "../components/Portfolio/Intro.jsx";
import LeftSider from "../components/Portfolio/LeftSider.jsx";
import { useEffect } from "react";
import { getPortfolioData } from "../redux/portfolio/portfolioSlice";
import About from "../components/Portfolio/About.jsx";
import Experiences from "../components/Portfolio/Experiences.jsx";
import Projects from "../components/Portfolio/Projects.jsx";
import Contact from "../components/Portfolio/Contact.jsx";
import Footer from "../components/Portfolio/Footer.jsx";

const Portfolio = () => {
  const dispatch = useDispatch();
  const { portfolioData, isLoading } = useSelector((state) => state.portfolio);

  useEffect(() => {
    if (!portfolioData) {
      dispatch(getPortfolioData());
    }
  }, [portfolioData]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-5xl sm:3xl">
          Fetching Portfolio Data... please wait
        </h1>
      </div>
    );
  }

  return (
    <>
      {portfolioData && (
        <div className="bg-slate-800 px-40 sm:px-5">
          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      )}
    </>
  );
};

export default Portfolio;
