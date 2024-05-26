import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const { admin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (admin) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setCheckingStatus(false);
  }, [admin]);

  return { isLoggedIn, checkingStatus };
};

export default useAuthStatus;
