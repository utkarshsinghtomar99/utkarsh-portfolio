import { useSelector } from "react-redux";
import LoginForm from "../components/Forms/LoginForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Login = () => {
  const { admin, isSuccess, isMessage, isLoading, isError } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (admin) {
      navigate("/admin-dashboard");
    }
    if (isSuccess) {
      toast.success(isMessage);
    }
    if (isError && isMessage) {
      toast.error(isMessage);
    }
  }, [admin, isSuccess, isMessage, isError]);

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen bg-gray-900">
          <div className="w-96 flex gap-5 p-5 flex-col rounded-lg text-white">
            <h1 className="text-2xl text-center font-medium">
              Loading... please wait
            </h1>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="w-96 flex gap-5 p-5 flex-col rounded-lg bg-white">
          <h1 className="text-2xl text-center font-medium">Admin Login</h1>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
