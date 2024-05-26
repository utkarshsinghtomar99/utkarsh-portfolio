import { Navigate, Outlet } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";

const AdminStatus = () => {
  const { isLoggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return (
      <>
        <div className="flex justify-center items-center h-screen bg-gray-900">
          <div className="w-96 flex gap-5 p-5 flex-col rounded-lg text-white">
            <h1 className="text-2xl text-center font-medium">
              Checking Status... please wait
            </h1>
          </div>
        </div>
      </>
    );
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={`/login`} />;
};

export default AdminStatus;
