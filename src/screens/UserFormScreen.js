// src/screens/UserFormScreen.js
import React, { useState } from "react";
import { auth, firestore, collection, addDoc } from "../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MailImg from "../assets/Images/envelope.svg";
import NameImg from "../assets/Images/person-fill.svg";
import NotAvailable from "../assets/Images/ban.svg"

const UserFormScreen = () => {
  const [travelType, setTravelType] = useState("");
  const [travelDateFrom, setTravelDateFrom] = useState("");
  const [travelDateTo, setTravelDateTo] = useState("");
  const [inconvenientDates, setInconvenientDates] = useState("");

  const user = auth.currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(firestore, "UserTravelDetails"), {
        email: user.email,
        name: user.displayName,
        travelType,
        travelDateFrom,
        travelDateTo,
        inconvenientDates,
      });
      toast.success("Travel details saved successfully");
    } catch (error) {
      toast.error("Error saving travel details");
    }
  };

  return (
    <div className="user-form-container d-flex justify-content-center align-item-center">
      <div className="user-form d-flex justify-content-center align-item-center m-2  ">
        {/* <div className=" "> */}
        <form onSubmit={handleSubmit}>
          <h2>User Travel Form</h2>
          <div className="">
            <label>Email</label>
            <div className="d-flex bg-white form-control">
              <img src={MailImg} alt="Mail Icon"></img>
              <input
                type="email"
                value={user ? user.email : ""}
                readOnly
                className="form-control border-0"
                placeholder="Eg: johnwick@gmail.com"
              ></input>
            </div>
          </div>
          <div className="">
            <label>Name</label>
            <div className="d-flex form-control">
              <img src={NameImg} alt="Name Icon"></img>
              <input
                type="text"
                value={user ? user.displayName : ""}
                readOnly
                className="form-control border-0"
                placeholder="Eg: John Wick"
              />
            </div>
          </div>
          <div className="">
            <label>Travel Type</label>
            <select
              value={travelType}
              onChange={(e) => setTravelType(e.target.value)}
              className="form-select p-0"
            >
              <option value="Family"></option>
              <option value="Family">Family</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className="">
            <label>Travel Date From</label>
            <input
              type="date"
              value={travelDateFrom}
              onChange={(e) => setTravelDateFrom(e.target.value)}
              className="form-control p-1"
            />
          </div>
          <div className="">
            <label>Travel Date To</label>
            <input
              type="date"
              value={travelDateTo}
              onChange={(e) => setTravelDateTo(e.target.value)}
              className="form-control p-1"
            />
          </div>
          <div className="">
            <label>Inconvenient Dates</label>
            <div className="d-flex form-control">
              <img src={NotAvailable} alt="Not Available"></img>
              <input
                type="text"
                value={inconvenientDates}
                onChange={(e) => setInconvenientDates(e.target.value)}
                className="form-control border-0"
              />
            </div>
          </div>
          <div className="submit-div">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* </div> */}
      <ToastContainer />
    </div>
  );
};

export default UserFormScreen;
