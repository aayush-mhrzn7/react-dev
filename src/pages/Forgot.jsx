import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Darkmode from "../components/Darkmode";
import { useForm } from "react-hook-form";
function Forgot() {
  const { register, handleSubmit } = useForm();
  function forgot(data) {
    console.log(data);
  }
  return (
    <div className="w-full h-screen flex items-center justify-center dark:bg-black">
      <div className="w-1/3">
        <Darkmode />
        <form onSubmit={handleSubmit(forgot)}>
          <Input
            type="password"
            label="password"
            placeholder="enter your password"
            labelClass=" dark:text-white block mb-1 font-medium my-3"
            className="w-full my-2"
            {...register("password", { required: true })}
          />
          <Input
            type="password"
            label="re-password"
            placeholder="enter your password again"
            labelClass=" dark:text-white block mb-1 font-medium my-3"
            className="w-full my-2"
            {...register("repassword", { required: true })}
          />
          <Button
            type="submit"
            className="mt-2 dark:bg-white dark:text-black bg-black w-full"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
