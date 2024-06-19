import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import auth from "../../auth/auth";

function Verify() {
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const secretd = urlParams.get("secret");
  const userID = urlParams.get("userId");
  async function updateVerify() {
    try {
      const verify = await auth.updateVerify(userID, secretd);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  updateVerify();

  return <></>;
}

export default Verify;
