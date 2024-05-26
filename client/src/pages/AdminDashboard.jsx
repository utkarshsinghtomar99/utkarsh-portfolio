import { useDispatch, useSelector } from "react-redux";
import IntroForm from "../components/Forms/IntroForm";
import AboutForm from "../components/Forms/AboutForm";
import Header from "../components/Header";
import { useEffect } from "react";
import { getPortfolioData } from "../redux/portfolio/portfolioSlice";
import ContactForm from "../components/Forms/ContactForm";
import ExperienceForm from "../components/Forms/ExperienceForm";
import ProjectForm from "../components/Forms/ProjectForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { portfolioData, isSuccess, isMessage } = useSelector(
    (state) => state.portfolio
  );

  useEffect(() => {
    if (!portfolioData) {
      dispatch(getPortfolioData());
    }
  }, [portfolioData]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(isMessage);
    }
  }, [isSuccess, isMessage]);

  return (
    <>
      <Header />
      {portfolioData && (
        <div className="px-10 pb-10">
          <IntroForm />
          <AboutForm />
          <ExperienceForm />
          <ProjectForm />
          <ContactForm />
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
