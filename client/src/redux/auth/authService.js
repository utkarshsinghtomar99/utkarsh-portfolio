import axios from "axios";

const loginAdmin = async (formData) => {
  const res = await axios.post(
    "/api/portfolio-auth/admin-login",
    formData
  );
  localStorage.setItem("admin", JSON.stringify(res.data.data.username));
  return res.data;
};

const services = {
  loginAdmin,
};

export default services;
