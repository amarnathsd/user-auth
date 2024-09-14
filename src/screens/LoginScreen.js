// src/screens/LoginScreen.js
import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Container } from "react-bootstrap";
import Experiance from "../assets/Images/Experiance.jpg";
import Google from "../assets/Images/google.svg";
import TajMahal from "../assets/Images/TajMahal.png";
import LeaningTower from "../assets/Images/LeaningTower.png";

const LoginScreen = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success("Logged in successfully");
      navigate("/check-user");
    } catch (error) {
      toast.error("Google login failed");
    }
  };

  return (
    <Container
      fluid
      className="login-screen d-flex  row "
    >
      <div className="img-section col-6 ">
        <h1 className="image-text">FlyingPanda Tours</h1>
        <h6 className="image-subtext ">
          Travel is the only purchase that enriches you in ways beyond material
          wealth
        </h6>
        <img
          className="experiance-img"
          src={Experiance}
          alt="Experiance Img"
        ></img>
      </div>
      <div className="login-section col-6">
        <div className="mt-5 text-center">
        <h2 >Welcome to FlyingPanda</h2>
        <p>where your travel dreams take flight!</p>
          <p className="pass-text mt-5 fs-3">Please proceed by Google</p>
          <Button className="login-btn" onClick={handleGoogleLogin}>
            Sign in with <img className="pb-1" src={Google} alt="Google"></img>
          </Button>
          <div className="d-flex justify-content-between ">
            <div>
              <img className="taj-mahal " src={TajMahal} alt="TajMahal"/>
            </div>
            <div>
              <img className="leaning-tower" src={LeaningTower} alt="LeaningTower" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default LoginScreen;
