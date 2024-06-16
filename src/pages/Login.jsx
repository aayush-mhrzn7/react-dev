import React from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Darkmode from "../components/Darkmode";
function Login() {
  function display(data) {
    console.log(data);
  }
  const { register, handleSubmit } = useForm();
  return (
    <div className="w-full h-screen flex justify-center items-center dark:bg-black">
      <div className=" w-1/3">
        <h1 className="text-2xl text-center mb-4 font-medium my-3 dark:text-white">
          Log in
        </h1>
        <Darkmode />
        <form onSubmit={handleSubmit(display)}>
          <Input
            type="email"
            className="my-2 w-full"
            placeholder="what is your email"
            label="email"
            labelClass="  dark:text-white block mb-1 font-medium  "
            {...register(`email`, {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          ></Input>
          <Input
            type="password"
            labelClass="  dark:text-white block mb-1 font-medium"
            className="my-2 w-full"
            placeholder="what is your password"
            label="password"
            {...register(`password`, {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
          ></Input>
          <a href="#" className="  dark:text-white block font-medium">
            forgot password?
          </a>
          <Button
            type="submit"
            className=" bg-black mt-2 w-full dark:bg-white font-semibold dark:text-black"
          >
            Log In
          </Button>
        </form>
        <h3 className="my-2 font-medium  dark:text-white">
          login by another way?
        </h3>
        <Button className="mt-2 w-full bg-[#DB4437] font-semibold mb-2">
          Google
        </Button>
        <Button className="mt-2 w-full bg-black dark:bg-white dark:text-black text-white font-semibold">
          Apple
        </Button>
      </div>
    </div>
  );
}

export default Login;
