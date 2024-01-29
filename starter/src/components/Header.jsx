import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/userSlice";
import { clearCart } from "../features/cartSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.userState.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm"> Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign In / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;