import React from "react";
// import axios from "axios";

const useSignup = (requestedFunction) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState();

  const sendReq = (SignUpFormData) => {
    setLoading(true);
    try {
      const req = requestedFunction(SignUpFormData);
      setData(req.data);
      setLoading(false);
    } catch (error) {
      setData(error.response);
      setLoading(false);
    }
  };
  return { data, loading, sendReq };
};

export default useSignup;
