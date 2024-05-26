const {
  Intro,
  About,
  Experience,
  Project,
  Contact,
} = require("../models/portfolioModel");

const getPortfolioData = async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Project.find();
    const contacts = await Contact.find();

    res.status(200).json({
      intro: intros[0],
      about: abouts[0],
      experiences: experiences,
      projects: projects,
      contact: contacts[0],
    });
  } catch (error) {
    console.log(error);
  }
};

const updatingData = async (req, res) => {
  const { modelName, modelId } = req.params;

  switch (modelName) {
    case "intro":
      try {
        const updatedIntro = await Intro.findByIdAndUpdate(
          { _id: modelId },
          req.body,
          { new: true }
        );
        if (updatedIntro === null) {
          res.status(500);
          throw new Error("Id Not Found");
        }
        res.status(200).json({
          msg: `Intro has Successfully Updated`,
          data: updatedIntro,
        });
      } catch (error) {
        res.send(error.message);
      }
      break;

    case "about":
      try {
        const updatedAbout = await About.findByIdAndUpdate(
          { _id: modelId },
          req.body,
          { new: true }
        );
        if (updatedAbout === null) {
          res.status(500);
          throw new Error("Id Not Found");
        }
        res.status(200).json({
          msg: `About has Successfully Updated`,
          data: updatedAbout,
        });
      } catch (error) {
        res.send(error.message);
      }
      break;

    case "experience":
      try {
        const updatedExperience = await Experience.findByIdAndUpdate(
          { _id: modelId },
          req.body,
          { new: true }
        );
        if (updatedExperience === null) {
          res.status(500);
          throw new Error("Id Not Found");
        }
        res.status(200).json({
          msg: `Experience has Successfully Updated`,
          data: updatedExperience,
        });
      } catch (error) {
        res.send(error.message);
      }
      break;

    case "project":
      try {
        const updatedProject = await Project.findByIdAndUpdate(
          { _id: modelId },
          req.body,
          { new: true }
        );
        if (updatedProject === null) {
          res.status(500);
          throw new Error("Id Not Found");
        }
        res.status(200).json({
          msg: `Project has Successfully Updated`,
          data: updatedProject,
        });
      } catch (error) {
        res.send(error.message);
      }
      break;

    case "contact":
      try {
        const updatedContact = await Contact.findByIdAndUpdate(
          { _id: modelId },
          req.body,
          { new: true }
        );
        if (updatedContact === null) {
          res.status(500);
          throw new Error("Id Not Found");
        }
        res.status(200).json({
          msg: `Contact has Successfully Updated`,
          data: updatedContact,
        });
      } catch (error) {
        res.send(error.message);
      }
      break;

    default:
      res.send("No Model Found");
      break;
  }
};

const deletingData = async (req, res) => {
  const { modelName, modelId } = req.params;

  switch (modelName) {
    case "experience":
      try {
        const deletedExperience = await Experience.findByIdAndDelete({
          _id: modelId,
        });
        if (deletedExperience === null) {
          res.status(500);
          throw new Error("Id Not Found");
        }
        res.status(200).json({
          msg: `Experience has Successfully Deleted`,
        });
      } catch (error) {
        res.send(error.message);
      }
      break;

    case "project":
      try {
        const deletedProject = await Project.findByIdAndDelete({
          _id: modelId,
        });
        if (deletedProject === null) {
          res.status(500);
          throw new Error("Id Not Found");
        }
        res.status(200).json({
          msg: `Project has Successfully Deleted`,
        });
      } catch (error) {
        res.send(error.message);
      }
      break;

    default:
      res.send("No Model Found");
      break;
  }
};

const createData = async (req, res) => {
  const { modelName } = req.params;

  switch (modelName) {
    case "experience":
      try {
        const { period, company, title, description } = req.body;
        if (!period || !company || !title || !description) {
          res.status(500);
          throw new Error("Please Fill All Details");
        }
        await Experience.create({
          period,
          company,
          title,
          description,
        });

        res.status(200).json({
          msg: `Experience has Successfully Created`,
        });
      } catch (error) {
        res.send(error.message);
      }
      break;

    case "project":
      try {
        const { image, title, description, link } = req.body;
        if (!image || !title || !description || !link) {
          res.status(500);
          throw new Error("Please Fill All the Details");
        }
        await Project.create({
          image,
          title,
          description,
          link,
        });
        res.status(200).json({
          msg: `Project has Successfully Created`,
        });
      } catch (error) {
        res.send(error.message);
      }
      break;

    default:
      res.send("No Model Found");
      break;
  }
};

module.exports = {
  getPortfolioData,
  updatingData,
  deletingData,
  createData,
};
