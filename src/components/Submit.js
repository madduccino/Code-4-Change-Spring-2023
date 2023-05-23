import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";
import firebaseConfig from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useList } from "react-firebase-hooks/database";

function Submit() {
  const app = initializeApp(firebaseConfig);

  // Get a reference to the database service
  const db = getFirestore(app);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    teamName: "",
    email: "",
    studentEmail: "",
    age: "",
    grade: "",
    projName: "",
    url: "",
    desc: "",
    sdg: "",
    challenge: "",
    power: "",
    charity: "",
    social: "",
    school: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const [error, setError] = useState(false);

  const handleFirstNameChange = (event) => {
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };
  const handleLastNameChange = (event) => {
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };
  const handleProjectNameChange = (event) => {
    setValues((values) => ({
      ...values,
      projName: event.target.value,
    }));
  };
  const handleURLChange = (event) => {
    setValues((values) => ({
      ...values,
      url: event.target.value,
    }));
  };
  const handleCharityChange = (event) => {
    setValues((values) => ({
      ...values,
      charity: event.target.value,
    }));
  };
  const handleSDGChange = (event) => {
    setValues((values) => ({
      ...values,
      sdg: event.target.value,
    }));
  };
  const handleAgeChange = (event) => {
    setValues((values) => ({
      ...values,
      age: event.target.value,
    }));
  };
  const handleTeamNameChange = (event) => {
    setValues((values) => ({
      ...values,
      teamName: event.target.value,
    }));
  };
  const handleGradeChange = (event) => {
    setValues((values) => ({
      ...values,
      grade: event.target.value,
    }));
  };

  const handleSocialChange = (event) => {
    setValues((values) => ({
      ...values,
      social: event.target.value,
    }));
  };

  const handleEmailChange = (event) => {
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handlePowerChange = (event) => {
    setValues((values) => ({
      ...values,
      power: event.target.value,
    }));
  };

  const handleChallengeChange = (event) => {
    setValues((values) => ({
      ...values,
      challenge: event.target.value,
    }));
  };

  const handleDescriptionChange = (event) => {
    setValues((values) => ({
      ...values,
      desc: event.target.value,
    }));
  };

  const handleSchoolChange = (event) => {
    setValues((values) => ({
      ...values,
      school: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const projectsRef = collection(db, "projects");
    try {
      if (
        values.firstName &&
        values.lastName &&
        values.email &&
        values.age &&
        values.grade &&
        values.school &&
        values.projName &&
        values.url &&
        values.desc &&
        values.sdg &&
        values.challenge &&
        values.power &&
        values.charity &&
        values.school
      ) {
        setValid(true);
        console.log("submitted!");

        addDoc(projectsRef, {
          created: serverTimestamp(),
          firstName: values.firstName,
          lastName: values.lastName,
          teamName: values.teamName,
          email: values.email,
          age: values.age,
          grade: values.grade,
          projName: values.projName,
          url: values.url,
          desc: values.desc,
          sdg: values.sdg,
          challenge: values.challenge,
          power: values.power,
          charity: values.charity,
          social: values.social,
          school: values.school,
        });
      } else {
        setError("Missing Fields");
        // throw new Error("ehll");
      }
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };

  return (
    <>
      <div id="header"></div>
      <div className="container">
        {valid && (
          <>
            <h2>Thank you for submitting your Code 4 Change project!</h2>
            <p>
              Visit our <a href="/vote">voting page</a> starting Wednesday, May
              24th to vote for your favorite projects. Voting will be open until
              Tuesday, May 30th!
            </p>
          </>
        )}
        {!valid && (
          <>
            <h2>Submit Your Code 4 Change Project</h2>
            <p>Projects are due May 19th!</p>

            <form id="submissionsForm" onSubmit={handleSubmit}>
              <label className="required" htmlFor="firstName">
                <strong>First name</strong>
              </label>
              <p>
                If you worked in a team, please include the first names of each
                team member in this format: Ada, Alan, Grace
              </p>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                name="firstName"
                value={values.firstName}
                onChange={handleFirstNameChange}
              />
              {submitted && !values.firstName && (
                <span className="error" id="firstName-error">
                  Please enter your first name.
                </span>
              )}
              <label className="required" htmlFor="lastName">
                <strong>Last name</strong>
              </label>
              <p>
                If you worked in a team, please include the last names of each
                team member in the same order in this format: Lovelace, Turing,
                Hopper
              </p>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                name="lastName"
                value={values.lastName}
                onChange={handleLastNameChange}
              />
              {submitted && !values.lastName && (
                <span className="error" id="lastName-error">
                  Please enter your last name.
                </span>
              )}
              <label htmlFor="teamName">
                <strong>Team name (if applicable)</strong>
              </label>
              <input
                type="text"
                id="teamName"
                placeholder="Enter your team name"
                name="teamName"
                value={values.teamName}
                onChange={handleTeamNameChange}
              />
              <label className="required" htmlFor="email">
                <strong>Email</strong>
              </label>
              <p>
                We will send information about your submission to this email
                address.
              </p>
              <input
                type="text"
                id="email"
                placeholder="Enter an email address"
                name="email"
                value={values.email}
                onChange={handleEmailChange}
              />
              {submitted && !values.email && (
                <span className="error" id="email-error">
                  Please enter an email address.
                </span>
              )}
              <label className="required" htmlFor="age">
                <strong>Age</strong>
              </label>
              <p>
                If you worked in a team, please include the ages of each team
                member in the same order in this format: 5, 10, 65
              </p>
              <input
                type="text"
                id="age"
                placeholder="Enter your age"
                name="age"
                value={values.age}
                onChange={handleAgeChange}
              />
              {submitted && !values.age && (
                <span className="error" id="age-error">
                  Please enter your age.
                </span>
              )}
              <label className="required" htmlFor="grade">
                <strong>Grade</strong>
              </label>
              <p>
                If you worked in a team, please include the grades of each team
                member (if applicable) in the same order in this format: 1, 4, 6
              </p>
              <input
                type="text"
                id="grade"
                placeholder="Enter your grade"
                name="grade"
                value={values.grade}
                onChange={handleGradeChange}
              />
              {submitted && !values.grade && (
                <span className="error" id="grade-error">
                  Please enter your grade.
                </span>
              )}
              <label className="required" htmlFor="school">
                <strong>School</strong>
              </label>
              <p>
                If you worked in a team, please include all schools attended by
                the team.
              </p>
              <input
                type="text"
                id="school"
                placeholder="Enter your school"
                name="school"
                value={values.school}
                onChange={handleSchoolChange}
              />
              {submitted && !values.school && (
                <span className="error" id="school-error">
                  Please enter your school.
                </span>
              )}
              <label className="required" htmlFor="projName">
                <strong>Project name</strong>
              </label>
              <input
                type="text"
                id="projName"
                placeholder="Enter the name of your project"
                name="projName"
                value={values.projName}
                onChange={handleProjectNameChange}
              />
              {submitted && !values.projName && (
                <span className="error" id="projectName-error">
                  Please enter the name of your project.
                </span>
              )}
              <label className="required" htmlFor="url">
                <strong>Public-facing URL for the project</strong>
              </label>
              <div>
                <p>
                  Please review our{" "}
                  <a href="/sharing-instructions" target="_blank">
                    sharing instructions
                  </a>
                  .
                </p>
              </div>

              <input
                type="text"
                id="url"
                placeholder="Enter the link to your project"
                name="url"
                value={values.url}
                onChange={handleURLChange}
              />
              {submitted && !values.url && (
                <span className="error" id="url-error">
                  Please enter the link to your project.
                </span>
              )}
              <label className="required" htmlFor="desc">
                <strong>Short description of your project</strong>
              </label>
              <textarea
                rows="5"
                type="text"
                id="desc"
                placeholder="Enter a description of your project"
                name="description"
                value={values.desc}
                onChange={handleDescriptionChange}
              ></textarea>
              {submitted && !values.desc && (
                <span className="error" id="desc-error">
                  Please enter a description of your project.
                </span>
              )}
              <label className="required" htmlFor="sdg">
                <strong>
                  Which Sustainable Development Goal does your project address?
                </strong>
              </label>
              <p>
                Please review the UN's{" "}
                <a target="_blank" href="https://sdgs.un.org/goals">
                  Sustainable Development Goals
                </a>{" "}
                and choose from the options below.
              </p>
              <select id="sdg" name="sdg" onChange={handleSDGChange}>
                <option value="none">Select an Option</option>
                <option value="hunger">Zero Hunger</option>
                <option value="cleanWater">Clean Water and Sanitation</option>
                <option value="consumption">
                  Responsible Consumption and Production
                </option>
                <option value="climate">Climate Action</option>
                <option value="belowWater">Life Below Water</option>
                <option value="land">Life on Land</option>
              </select>
              {submitted && !values.sdg && (
                <p className="error" id="sdg-error">
                  Please select a Sustainable Development Goal.
                </p>
              )}
              <label className="required" htmlFor="challenge">
                <strong>
                  What was the biggest challenge you faced while making this
                  project?
                </strong>
              </label>

              <textarea
                rows="5"
                type="text"
                id="challenge"
                placeholder="What did you find challenging when making this project?"
                name="challenge"
                value={values.challenge}
                onChange={handleChallengeChange}
              ></textarea>
              {submitted && !values.challenge && (
                <span className="error" id="challenge-error">
                  Please explain.
                </span>
              )}
              <label className="required" htmlFor="power">
                <strong>
                  Why do you think coding has the power to change the world for
                  the better?
                </strong>
              </label>

              <textarea
                rows="5"
                type="text"
                id="power"
                placeholder="How can coding help build a better world?"
                name="power"
                value={values.power}
                onChange={handlePowerChange}
              ></textarea>
              {submitted && !values.power && (
                <span className="error" id="power-error">
                  Please explain.
                </span>
              )}
              <label className="required" htmlFor="charity">
                <strong>Where would you like to donate? </strong>
              </label>
              <p>
                Winners will receive a donation of $50 to support a select
                philanthropic organization embodying the spirit of Code 4
                Change. If you win, where would you like to donate? Please
                choose from the options below.
              </p>
              <select
                id="charity"
                name="charity"
                onChange={handleCharityChange}
              >
                <option value="none">Select an Option</option>
                <option value="nokidhungry">
                  No Kid Hungry - https://nokidhungry.org
                </option>
                <option value="carbon180">
                  Carbon180 - https://carbon180.org
                </option>
                <option value="worldfoodprogramme">
                  World Food Programme - https://wfp.org
                </option>
                <option value="charitywater">
                  charity: water - https://charitywater.org
                </option>
                <option value="oceanconservancy">
                  Ocean Conservancy - https://oceanconservancy.org
                </option>
                <option value="rainforestalliance">
                  Rainforest Alliance - https://rainforest-alliance.org
                </option>
              </select>
              {submitted && !values.charity && (
                <p className="error" id="charity-error">
                  Please choose an organization.
                </p>
              )}
              <label htmlFor="social">
                <strong>Social Media</strong>
                <p>
                  Your project may be selected to be featured on TCS social
                  media. If interested, please include your social media account
                  handles (Instagram, Facebook, Twitter).
                </p>
              </label>
              <input
                type="text"
                id="social"
                placeholder="Enter your social handles if you'd like us to shout you out!"
                name="social"
                value={values.social}
                onChange={handleSocialChange}
              />
              <button id="submitProject" className="center">
                Submit
              </button>
              <p className="error">{error}</p>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default Submit;
