import React from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
function Login() {
  function display(data) {
    console.log(data);
  }
  const { register, handleSubmit } = useForm();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" w-1/2">
        <h1 className="text-2xl text-center mb-4 font-medium my-3">Log in</h1>
        <form onSubmit={handleSubmit(display)}>
          <Input
            type="email"
            className="my-2 w-full"
            placeholder="what is your email"
            label="email"
            labelClass="block mb-1 font-medium  "
            {...register(`email`, {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          ></Input>
          <Input
            type="password"
            labelClass="block mb-1 font-medium"
            className="my-2 w-full"
            placeholder="what is your password"
            label="password"
            {...register(`password`, {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
          ></Input>
          <a href="#" className="block font-medium">
            forgot password?
          </a>
          <Button type="submit" className=" bg-black mt-2 w-full">
            Log In
          </Button>
        </form>
        <h3 className="my-2 font-medium">login by another way?</h3>
        <Button className="mt-2 w-full bg-[#DB4437] mb-2">Google</Button>
        <Button className="mt-2 w-full bg-black">Apple</Button>
      </div>
    </div>
  );
}

export default Login;
