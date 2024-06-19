import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../auth/auth";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function Reset() {
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const secretd = urlParams.get("secret");
  const userID = urlParams.get("userId");
  const { register, handleSubmit } = useForm();
  const reset = async (data) => {
    /*     console.log(userID, secretd, data); */
    const reset = await auth.updatePassword(userID, secretd, data);
    if (reset) {
      navigate("/login");
    }
  };
  return (
    <div>
      <h1>forgot</h1>
      <form onSubmit={handleSubmit(reset)}>
        <Input
          type="password"
          className="my-2 w-full"
          placeholder="what is your password"
          label="password"
          labelClass="  dark:text-white block mb-1 font-medium  "
          {...register("password", {
            required: true,
          })}
        ></Input>
        <Input
          type="password"
          className="my-2 w-full"
          placeholder="what is your password"
          label="re-password"
          labelClass="  dark:text-white block mb-1 font-medium  "
          {...register("repassword", {
            required: true,
          })}
        ></Input>
        <Button
          type="submit"
          className=" bg-black mt-2 w-full dark:bg-white font-semibold dark:text-black"
          onClick={() => reset()}
        >
          forget password
        </Button>
      </form>
    </div>
  );
}

export default Reset;
