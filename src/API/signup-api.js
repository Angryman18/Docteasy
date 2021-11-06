import axios from "axios";
import React from "react";

const SignupAPI = async (SignUpFormData) => {
  const [data, setData] = React.useState({});

  try {
    const req = await axios.post(
      `http://localhost:1337/auth/local/register`,
      SignUpFormData
    );
    setData(req)
  } catch (error) {
    setData(error.response)
  }
  return data;
};

export default SignupAPI;
