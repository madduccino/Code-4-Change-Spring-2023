import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

function Profile(props) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // const submissionsRef = ref(db, "submissions/");
    // onValue(submissionsRef, (snapshot) => {
    //   setData(snapshot.val());
    // });
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  return (
    <>
      <div id="header"></div>
      <div id="project">
        <div id="the-project">
          <iframe width="485" height="402" src={`${data.url}/embed`}></iframe>
          <p className="center">
            <a target="_blank" href={data.url}>
              View in Full Screen
            </a>
          </p>
        </div>
        <div id="about">
          <h2>Coder Profile</h2>
          <p>
            <strong>Name:</strong> {data.firstName}
          </p>
          {data.teamName && (
            <p>
              <strong>Team Name:</strong> {data.teamName}
            </p>
          )}
          <p>
            <strong>Age:</strong> {data.age}
          </p>
          <p>
            <strong>Grade:</strong> {data.grade}
          </p>
          <p>
            <strong>Sustainable Development Goal:</strong> <p>{data.sdg}</p>
          </p>
        </div>
        <div id="about-project">
          <h2>About the Project</h2>
          <p>
            <strong>Name:</strong> {data.projName}
          </p>

          <p>
            <strong>Description:</strong> {data.desc}
          </p>
          <div>
            <a href="/vote">Back</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
