import { useState } from "react";
import { useDispatch } from "react-redux";
import { adminLogin } from "../../redux/auth/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(formData));
    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <form className="flex gap-5 flex-col" onSubmit={handleSubmit}>
        <input
          name="username"
          value={username}
          onChange={handleChange}
          className="px-3 py-2 border-2 focus:border-black h-[35px] rounded-lg"
          placeholder="username"
          type="password"
          required
        />
        <input
          name="password"
          value={password}
          onChange={handleChange}
          className="px-3 py-2 border-2 focus:border-black h-[35px] rounded-lg"
          placeholder="password"
          type="password"
          required
        />
        <button
          type="submit"
          className="bg-slate-800 text-white p-2 rounded-lg hover:bg-gray-600"
        >
          login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
