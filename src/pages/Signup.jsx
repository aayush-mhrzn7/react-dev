import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
function Signup() {
  const { register, handleSubmit } = useForm();
  function display(data) {
    console.log(data);
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" w-1/2">
        <h1 className="text-2xl text-center mb-4 font-medium my-3">SignUp</h1>
        <form onSubmit={handleSubmit(display)}>
          <Input
            type="text"
            placeholder="what is your name"
            className="my-2 w-full"
            label="name"
            labelClass="block mb-1 font-medium"
            {...register(`name`, {
              required: true,
            })}
          ></Input>
          <Input
            type="email"
            placeholder="what is your email"
            className="my-2 w-full"
            label="email"
            labelClass="block mb-1 font-medium"
            {...register(`email`, {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          ></Input>
          <Input
            type="password"
            labelClass="block mb-1 font-medium"
            placeholder="what is your password"
            className="my-2 w-full"
            label="password"
            {...register(`password`, {
              required: true,
            })}
          ></Input>
          <Button type="submit" className="mt-2 w-full">
            Sign Up
          </Button>
        </form>
        <h3 className="mt-2 font-medium">Sign in by another way?</h3>
        <Button className="mt-2 w-full bg-[#DB4437] mb-2">Google</Button>
        <Button className="mt-2 w-full">Apple</Button>
      </div>
    </div>
  );
}

export default Signup;
