import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Faq from "./Components/Middle/Faqs/FAQ";
import ReviewSlider from "./Components/Middle/Reviews";
// const Hero = React.lazy(() => import('./Components/Hero/Hero'))
import Navbar from "./Components/Header/Navbar";
import { useSelector } from "react-redux";
import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/Signup/Signup";

function App() {
  const LoginValue = useSelector((state) => state.Login);
  const SignupValue = useSelector((state) => state.Signup);

  return (
    <React.Fragment>
      {LoginValue && <Login />}
      {SignupValue && <Signup />}
      <Navbar />
      <Hero />
      <Faq />
      <ReviewSlider />
    </React.Fragment>
  );
}

export default App;
