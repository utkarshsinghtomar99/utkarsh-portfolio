import axios from "axios";

const getPortfolioData = async () => {
  try {
    const res = await axios.get("https://utkarsh-portfolio-4ijs.onrender.com//api/portfolio/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Update
const updateData = async (updatingData) => {
  const { modelName, modelId, data } = updatingData;

  const res = await axios.put(
    `http://localhost:5000/api/portfolio/update/${modelName}/${modelId}`,
    data
  );
  return res.data;
};

// Delete
const deleteData = async (deletingData) => {
  const { modelName, modelId } = deletingData;

  const res = await axios.delete(
    `http://localhost:5000/api/portfolio/delete/${modelName}/${modelId}`
  );
  return res.data;
};

// Create
const createData = async (creatingData) => {
  const { modelName, data } = creatingData;
  const res = await axios.post(
    `http://localhost:5000/api/portfolio/create/${modelName}`,
    data
  );
  return res.data;
};

const portfolioServices = {
  getPortfolioData,
  updateData,
  deleteData,
  createData,
};

export default portfolioServices;
