import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useList } from "react-firebase-hooks/database";
import { Link } from "react-router-dom";

function App() {
  const app = initializeApp(firebaseConfig);

  // Get a reference to the database service
  const db = getFirestore(app);

  const [values, setValues] = useState({
    signupNames: "",
    parentEmail: "",
    studentEmail: "",
    age: "",
    grade: "",
    why: "",
    school: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const [error, setError] = useState(false);

  const handleSignupNamesChange = (event) => {
    setValues((values) => ({
      ...values,
      signupNames: event.target.value,
    }));
  };

  const handleLastNamesChange = (event) => {
    setValues((values) => ({
      ...values,
      lastNames: event.target.value,
    }));
  };

  const handleParentEmailChange = (event) => {
    setValues((values) => ({
      ...values,
      parentEmail: event.target.value,
    }));
  };
  const handleStudentEmailChange = (event) => {
    setValues((values) => ({
      ...values,
      studentEmail: event.target.value,
    }));
  };

  const handleAgeChange = (event) => {
    setValues((values) => ({
      ...values,
      age: event.target.value,
    }));
  };

  const handleGradeChange = (event) => {
    setValues((values) => ({
      ...values,
      grade: event.target.value,
    }));
  };

  const handleSchoolChange = (event) => {
    setValues((values) => ({
      ...values,
      school: event.target.value,
    }));
  };

  const handleWhyChange = (event) => {
    setValues((values) => ({
      ...values,
      why: event.target.value,
    }));
  };

  const handleTeamNameChange = (event) => {
    setValues((values) => ({
      ...values,
      teamName: event.target.value,
    }));
  };

  const handleProjectNameChange = (event) => {
    setValues((values) => ({
      ...values,
      projectName: event.target.value,
    }));
  };

  const handleUrlChange = (event) => {
    setValues((values) => ({
      ...values,
      url: event.target.value,
    }));
  };

  const handleDescriptionChange = (event) => {
    setValues((values) => ({
      ...values,
      description: event.target.value,
    }));
  };

  const handleSdgChange = (event) => {
    console.log(event.target.value);
    setValues((values) => ({
      ...values,
      sdg: event.target.value,
    }));
  };

  const handleChallengeChange = (event) => {
    setValues((values) => ({
      ...values,
      challenge: event.target.value,
    }));
  };

  const handlePowerChange = (event) => {
    setValues((values) => ({
      ...values,
      power: event.target.value,
    }));
  };

  const handleDonationChange = (event) => {
    setValues((values) => ({
      ...values,
      donation: event.target.value,
    }));
  };

  const handleSocialMediaChange = (event) => {
    setValues((values) => ({
      ...values,
      socialMedia: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const submissionsRef = collection(db, "submissions");
    try {
      if (
        (values.signupNames &&
          values.parentEmail &&
          values.age &&
          values.grade &&
          values.why,
        values.school)
      ) {
        setValid(true);

        addDoc(submissionsRef, {
          created: serverTimestamp(),
          signupNames: values.signupNames,
          parentEmail: values.parentEmail,
          studentEmail: values.studentEmail,
          age: values.age,
          grade: values.grade,
          why: values.why,
          school: values.school,
        });
      } else {
        setError("Missing Fields");
        // throw new Error("ehll");
      }
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      <div id="header"></div>
      <div className="container">
        {!valid && <h2>Sign Up for the Code 4 Change Challenge </h2>}
        {valid && (
          <div className="success-message">
            <h2>Thank you for registering for Code 4 Change! </h2>We'll be in
            touch with everything you need to know to submit your project, vote,
            and attend the live event where we'll celebrate all of your hard
            work!
            <h3>
              Have a question?{" "}
              <a href="https://thecodingspace.com/contact-us">Contact us</a>.
            </h3>
          </div>
        )}
        {!valid && (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="signupNames">
                <h3 className="required">Name(s)</h3>
                <p>
                  Who will be working on this project? If a group, include each
                  participant name.
                </p>
              </label>
              <input
                type="text"
                id="signupNames"
                placeholder="Enter your name(s)"
                name="signupNames"
                value={values.signupNames}
                onChange={handleSignupNamesChange}
              />
              {submitted && !values.signupNames && (
                <span id="signup-names-error">
                  Please enter the name(s) of participants
                </span>
              )}
            </div>
            <div>
              <label htmlFor="parentEmail">
                <h3 className="required">Parent Email</h3>
              </label>
              <input
                type="text"
                id="parentEmail"
                placeholder="Enter a parent email address"
                name="parentEmail"
                value={values.parentEmail}
                onChange={handleParentEmailChange}
              />
              {submitted && !values.parentEmail && (
                <span id="parent-email-changes">
                  Please enter a parent's email
                </span>
              )}
            </div>
            <div>
              <label htmlFor="studentEmail">
                <h3>Student Email</h3>
                <p>
                  In providing this email, you grant us permission to email your
                  child communication about this contest.
                </p>
              </label>
              <input
                type="text"
                id="studentEmail"
                placeholder="Enter a student email address"
                name="studentEmail"
                value={values.studentEmail}
                onChange={handleStudentEmailChange}
              />
            </div>

            <div>
              <label htmlFor="age">
                <h3 className="required">Age </h3>
                <p>For each participant</p>
              </label>
              <input
                type="text"
                id="age"
                placeholder="Enter your age"
                name="age"
                value={values.age}
                onChange={handleAgeChange}
              />
              {submitted && !values.age && (
                <span id="age-changes">Please enter your age</span>
              )}
            </div>
            <div>
              <label htmlFor="grade">
                <h3 className="required">Grade</h3>
                <p>For each participant</p>
              </label>
              <input
                type="text"
                id="grade"
                placeholder="Enter your grade"
                name="grade"
                value={values.grade}
                onChange={handleGradeChange}
              />
              {submitted && !values.grade && (
                <span id="grade-changes">Please enter your grade</span>
              )}
            </div>
            <div>
              <label htmlFor="school">
                <h3 className="required">School</h3>
              </label>
              <input
                type="text"
                id="grade"
                placeholder="Enter your school"
                name="school"
                value={values.school}
                onChange={handleSchoolChange}
              />
              {submitted && !values.school && (
                <span id="grade-changes">Please enter your school</span>
              )}
            </div>
            <div>
              <label htmlFor="why">
                <h3 className="required">
                  Why are you excited to participate in Code 4 Change?
                </h3>
              </label>
              <textarea
                type="text"
                id="why"
                placeholder="Enter your answer here"
                name="why"
                value={values.why}
                onChange={handleWhyChange}
              />
              {submitted && !values.why && (
                <span id="why-changes">
                  Please tell us why you're excited to participate in Code 4
                  Change!
                </span>
              )}
            </div>

            <button type="submit">Submit</button>
            <p className="error">{error}</p>
          </form>
        )}
      </div>
    </>
  );
}

export default App;
