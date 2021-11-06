import axios from "axios";

const Appoinment = async (getToken) => {
  try {
    const req = await axios.get(
      `${process.env.REACT_APP_URL}/doctor-consults`,
      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );
    console.log(req);
    return req;
  } catch (error) {
    return false;
  }
};

export default Appoinment;
