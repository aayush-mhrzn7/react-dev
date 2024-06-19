import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import Darkmode from "../components/Darkmode";
import auth from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../tools/authSlice";
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const display = async (data) => {
    const userData = await auth.signup(data);
    console.log(userData);
    if (userData) {
      const verification = await auth.verify();
    }
    /*  if (userData) {
      const userData = await auth.getCurrentUser();
      if (userData) {
        dispatch(login(userData));
        navigate("/");
      }
    } */
  };
  const google = async () => {
    return await auth.Oauth();
  };
  return (
    <div className="w-full h-screen flex justify-center items-center dark:bg-black">
      <div className=" mx-auto w-1/3">
        <Darkmode />
        <h1 className="text-2xl text-center mb-4 font-medium my-3 dark:text-white">
          SignUp
        </h1>
        <form onSubmit={handleSubmit(display)}>
          <Input
            type="text"
            placeholder="what is your name"
            className="my-2 w-full"
            label="name"
            labelClass=" dark:text-white block mb-1 font-medium"
            {...register(`name`, {
              required: true,
            })}
          ></Input>
          <Input
            type="email"
            placeholder="what is your email"
            className="my-2 w-full"
            label="email"
            labelClass=" dark:text-white block mb-1 font-medium"
            {...register(`email`, {
              required: true,
            })}
          ></Input>
          <Input
            type="password"
            labelClass=" dark:text-white block mb-1 font-medium"
            placeholder="what is your password"
            className="my-2 w-full"
            label="password"
            {...register(`password`, {
              required: true,
            })}
          ></Input>
          <Button
            type="submit"
            className="mt-2 dark:bg-white dark:text-black bg-black w-full"
          >
            Sign Up
          </Button>
        </form>
        <h3 className="mt-2 font-medium dark:text-white">
          Sign in by another way?
        </h3>
        <Button
          className="mt-2 w-full bg-[#DB4437] font-semibold mb-2 "
          onClick={() => {
            google();
          }}
        >
          Google
        </Button>
      </div>
    </div>
  );
}

export default Signup;
