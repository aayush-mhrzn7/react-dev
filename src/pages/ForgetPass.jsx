import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../auth/auth";

import Button from "../components/Button";
import Input from "../components/Input";

function ForgetPass() {
  const { register, handleSubmit } = useForm();
  const forgot = async (data) => {
    const mail = await auth.forgetPassword(data);
    console.log(mail);
  };
  return (
    <div>
      <h1>Passowrd</h1>
      <form onSubmit={handleSubmit(forgot)}>
        <Input
          type="email"
          className="my-2 w-full"
          placeholder="what is your email"
          label="email"
          labelClass="  dark:text-white block mb-1 font-medium  "
          {...register("email", {
            required: true,
          })}
        ></Input>
        <Button
          type="submit"
          className=" bg-black mt-2 w-full dark:bg-white font-semibold dark:text-black"
          onClick={() => forgot()}
        >
          forget password
        </Button>
      </form>
    </div>
  );
}

export default ForgetPass;
