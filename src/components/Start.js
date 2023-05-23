import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

function Start() {
  return (
    <>
      <div id="header"></div>
      <div className="container">
        <h2>Welcome to The Code 4 Change Challenge </h2>
        <p>
          Can YOU change the world through code? As part of the 2023 Code 4
          Change Challenge, we're asking young people just like you to build a
          project that educates others about one of the UN Sustainable
          Development Goals.
        </p>
        <p>
          Projects are due by May 19th, and winners will be announced during a
          live virtual event in June. Each category winner will receive a
          donation of $50 to support a select philanthropic organization
          embodying the spirit of Code 4 Change as well as a certificate of
          achievement.
        </p>
      </div>
    </>
  );
}

export default Start;
