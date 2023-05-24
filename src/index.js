import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Spring2020 from "./components/Spring2020";
import Fall2020 from "./components/Fall2020";
import Spring2021 from "./components/Spring2021";
import SharingInstructions from "./components/SharingInstructions";
import Vote from "./components/Vote";
import Profile from "./components/Profile";
import Start from "./components/Start";
import Submit from "./components/Submit";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Vote />} />
      <Route path="past-projects" element={<Projects />} />
      <Route path="spring2020" element={<Spring2020 />} />
      <Route path="fall2020" element={<Fall2020 />} />
      <Route path="spring2021" element={<Spring2021 />} />
      <Route path="sharing-instructions" element={<SharingInstructions />} />
      <Route path="vote" element={<Vote />} />
      <Route path={"/:id"} element={<Profile />} />
      <Route path={"/vote/:id"} element={<Profile />} />
      <Route path="start" element={<Start />} />
      <Route path="submit" element={<Submit />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
