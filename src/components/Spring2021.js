import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase, ref, onValue } from "firebase/database";

const spring2021Config = {
  apiKey: "AIzaSyAxivVqrTXlkSfB2UysZhfhjVshEZQBEJM",
  authDomain: "code-4-change-spring-2021.firebaseapp.com",
  databaseURL: "https://code-4-change-spring-2021-default-rtdb.firebaseio.com",
  projectId: "code-4-change-spring-2021",
  storageBucket: "code-4-change-spring-2021.appspot.com",
  messagingSenderId: "73076262295",
  appId: "1:73076262295:web:f410a6e25f891de74930d2",
};

function Projects() {
  const app = initializeApp(spring2021Config);
  const db = getDatabase(app);
  const [data, setData] = useState("");

  useEffect(() => {
    const submissionsRef = ref(db, "submissions/");
    onValue(submissionsRef, (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  return (
    <>
      <div id="header"></div>
      <div className="container">
        <h1>Spring 2021</h1>
        <h3>
          Drawing on the{" "}
          <a
            target="_blank"
            href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/"
          >
            UN's 17 Sustainable Development Goals
          </a>
          , coders were invited to use their innovation, creativity, and
          resourcefulness to address a global issue. Here's what they created.
        </h3>
      </div>
      <div className="grid">
        {Object.keys(data).map((submission) => (
          <div key={data[submission].uid}>
            <div className="card">
              <a href={data[submission].url}>
                <img src={data[submission].thumbnail} />
              </a>
              <div className="card-content">
                <h2>{data[submission].projName}</h2>

                <a href={data[submission].url}>View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
