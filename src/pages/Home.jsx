import React, { useState } from "react";
import Button from "../components/Button";
import Darkmode from "../components/Darkmode";
import auth from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../tools/authSlice";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function Logout() {
    await auth.logout();
    dispatch(logout());
    navigate("/login");
  }
  return (
    <div className="w-full h-screen flex items-center justify-center dark:bg-black">
      <div className=" w-1/3 p-3 h-1/3 flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center mb-10 dark:text-white">Home</h1>
        <Darkmode />
        <Button
          className="bg-black w-full font-semibold  dark:bg-white dark:text-black"
          onClick={(e) => {
            e.preventDefault();
            Logout();
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Home;
