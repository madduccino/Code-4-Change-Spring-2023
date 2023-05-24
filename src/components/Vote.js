import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let voteCount;

if (parseInt(localStorage.getItem("voteCount")) === 1) {
  voteCount = 1;
} else {
  voteCount = 0;
}

function Vote() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const tempArray = [];
    querySnapshot.forEach((doc) => {
      let tempObject = {};
      tempObject = doc.data();
      tempObject.uid = doc.id;
      tempArray.push(tempObject);
    });
    setData(tempArray);
  };

  return (
    <>
      <div id="header"></div>
      <>
        <div className="header">
          <h2>Vote for Coders' Choice!</h2>
          Click the gong to vote for your favorite project.
        </div>
        <div className="grid">
          {data.map((i) => (
            <div key={i.uid}>
              <div className="card">
                <Link
                  to={{
                    pathname: i.uid,
                  }}
                >
                  <img src={`images-2023/${i.thumbnail}.png`} />
                </Link>
                <div className="card-content">
                  <h2> {i.projName}</h2>
                  <Link
                    to={{
                      pathname: i.uid,
                    }}
                  >
                    View Project
                  </Link>
                </div>
                <Button id={i.uid} />
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
}
function Button(props) {
  const [votes, setVotes] = useState(0);

  const [gongSelected, setGongSelected] = useState(false);

  let currVotes = 0;

  useEffect(() => {
    if (localStorage.getItem("voted") === props.id) {
      setGongSelected(true);
    }
  }, []);

  const handleClick = async () => {
    const docRef = doc(db, "projects", props.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      if (Object.keys(docSnap.data()).includes("votes")) {
        currVotes = docSnap.data().votes;
        console.log(currVotes);
      }
    } else {
      // doc.data() will be undefined in this case
      currVotes = 0;
      console.log("votes don't exist");
    }
    handleVote();
  };

  const handleVote = async () => {
    const docRef = doc(db, "projects", props.id);
    if (voteCount === 0) {
      setGongSelected(true);
      await updateDoc(docRef, {
        votes: currVotes + 1,
      });
      voteCount = 1;
      localStorage.setItem("voted", props.id);
      localStorage.setItem("voteCount", 1);
      var audio = new Audio("gong.mp3");
      audio.play();
    } else {
      if (gongSelected) {
        await updateDoc(docRef, {
          votes: currVotes - 1,
        });
        setGongSelected(false);
        voteCount = 0;
        localStorage.clear();
      }
    }
  };

  const countVote = async () => {
    const docRef = doc(db, "projects", props.id);
    if (voteCount === 0) {
      await updateDoc(docRef, {
        votes: currVotes + 1,
        gongSelected: true,
      });
      storeVote(props.id);
      voteCount = 1;
      setVotes(votes + 1);
    }
  };

  const storeVote = (id) => {
    localStorage.setItem("voted", id);
  };

  const uncountVote = async () => {
    const docRef = doc(db, "projects", props.id);
    if (gongSelected) {
      await updateDoc(docRef, {
        votes: currVotes - 1,
        gongSelected: false,
      });
      voteCount = 0;
      setVotes(currVotes - 1);
      localStorage.clear();
    }
  };

  return (
    <div
      className={gongSelected ? "gong-pressed" : "gong-unpressed"}
      onClick={handleClick}
    ></div>
  );
}
export default Vote;
