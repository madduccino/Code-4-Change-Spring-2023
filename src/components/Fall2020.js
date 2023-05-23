import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase, ref, onValue } from "firebase/database";

const fall2020Config = {
  apiKey: "AIzaSyB7vN1QdWPBqFDHNIQGpAwSqjgq8HsRQhI",
  authDomain: "kids-teaching-kids.firebaseapp.com",
  databaseURL: "https://kids-teaching-kids.firebaseio.com",
  projectId: "kids-teaching-kids",
  storageBucket: "kids-teaching-kids.appspot.com",
  messagingSenderId: "304626881986",
  appId: "1:304626881986:web:1dd4260d75ed386f14f25b",
  measurementId: "G-CR18T82CY5",
};

function Projects() {
  const app = initializeApp(fall2020Config);
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
        <h1>Fall 2020</h1>
        <h3>
          Coders of all ages and skills levels were invited to make learning
          more fun and engaging for early elementary students. These games,
          projects, and activities were developed by kids, for kids, to review
          important skills and concepts taught in schools.
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
