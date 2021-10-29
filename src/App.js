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
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { Route } from "react-router";

import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";

function App() {
  const LoginValue = useSelector((state) => state.GlobalReducer.Login);
  const SignupValue = useSelector((state) => state.GlobalReducer.Signup);
  const ifLoggedIn = useSelector((state) => state.AuthReducer.LoggedIn);
  // const ifUser = useSelector((state) => state.AuthReducer.ifUser);

  const dispatch = useDispatch();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "setCookie", user: user });
    });
  }, [dispatch]);


  return (
    <React.Fragment>
      <ToastContainer limit={3} />
      {LoginValue && !ifLoggedIn && <Login />}
      {SignupValue && <Signup />}
      <Navbar />
      <Route exact path="/">
        <Hero />
        <Faq />
        <ReviewSlider />
      </Route>
    </React.Fragment>
  );
}

export default App;
