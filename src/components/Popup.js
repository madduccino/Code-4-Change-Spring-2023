import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";
function Popup() {
  //   const app = initializeApp(firebaseConfig);

  // Get a reference to the database service
  //   const db = getFirestore(app);
  const [values, setValues] = useState({
    firstNames: "",
    lastNames: "",
  });

  const handleFirstNameChange = (e) => {
    // this.setState({ firstName: e.target.value });
    console.log(this.state.firstName);
  };
  const handleLastNameChange = (e) => {
    // this.setState({ lastName: e.target.value });
  };

  const writeUserData = () => {
    // let fn = this.state.firstName;
    // let ln = this.state.lastName;
    // const db = Firebase.database();
    // localStorage.setItem("totalPoints", 0);
    // db.ref("/voters").push({
    //   firstName: fn,
    //   lastName: ln,
    // });
    // this.props.submitVote();
    // localStorage.clear();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h1>{this.props.text}</h1>
        <form>
          <label required>First Name: </label>
          <input required onChange={this.handleFirstNameChange} id="fn" />
          <label required> Last Name:</label>{" "}
          <input required onChange={this.handleLastNameChange} id="ln" />
          <button onClick={this.writeUserData}>
            <Link to="/thankyou">Submit Your Votes</Link>
          </button>
          <button onClick={this.props.closePopup}>
            Never mind, I want to keep looking! Reset my votes.
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
