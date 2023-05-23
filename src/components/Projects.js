import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spring2020 from "../assets/images/Spring2020.png";
import fall2020 from "../assets/images/Fall2020.png";
import spring2021 from "../assets/images/Spring2021.png";

export default function Menu() {
  return (
    <>
      <div id="header"></div>

      <div style={{ margin: 40 }} className="grid">
        <div className="card">
          <a href="/spring2020">
            <img src={spring2020} />
          </a>
          <div className="card-content">
            <h2>Spring 2020</h2>
            <a href="/spring2020">View Projects</a>
          </div>
        </div>
        <div className="card">
          <a href="/fall2020">
            <img src={fall2020} />
          </a>
          <div className="card-content">
            <h2>Fall 2020</h2>
            <a href="/fall2020">View Projects</a>
          </div>
        </div>
        <div className="card">
          <a href="/spring2021">
            <img src={spring2021} />
          </a>
          <div className="card-content">
            <h2>Spring 2021</h2>
            <a href="/spring2021">View Projects</a>
          </div>
        </div>
      </div>
    </>
  );
}
