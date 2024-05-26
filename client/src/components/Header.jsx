import { useDispatch, useSelector } from "react-redux";
import { logOutAdmin, reset } from "../redux/auth/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import logo from "../../public/favicon.png";
import { Button, Navbar, NavbarBrand } from "flowbite-react";

const Header = () => {
  const navigate = useNavigate();
  const { isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutAdmin());
    if (isSuccess) {
      toast.success("logout successfully");
      navigate("/login");
    }
    dispatch(reset());
  };

  return (
    <>
      <Navbar fluid className="bg-slate-800 px-11">
        <NavbarBrand href="#">
          <span className="flex items-center gap-4 self-center whitespace-nowrap text-xl text-white sm:flex-row-reverse">
            <img className=" h-10 w-10" src={logo} alt="" />
            Portfolio Admin Panel
          </span>
        </NavbarBrand>
        <div className="flex">
          <Button size="xs" className="rounded-full" onClick={handleLogout} type="submit">
            logout
          </Button>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
