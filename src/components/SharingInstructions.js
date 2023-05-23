import React, { useState, useEffect } from "react";
export default function Instructions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="header"></div>;
      <div className="container">
        <h2>Sharing Instructions</h2>

        <h3>Scratch</h3>
        <p>
          After creating and completing your project on Scratch, you will need
          to share it publicly. To do so, navigate to your Project Page. If you
          can’t find your Project Page, simply save your project, then go to "My
          Stuff" and click on the project from there.
        </p>
        <p>If you see this banner, just click Share!</p>
        <p>
          <img src="https://www.thecodingspace.com/img/c4c-share.png" />
        </p>
        <p>
          If you do not see this banner, then either your project is already
          shared or your account has not been fully activated. To check if your
          account is fully activated, go to your Profile page by clicking on
          your username on the top bar and selecting Profile.
        </p>
        <p>If you see this banner, your account needs to be activated: </p>
        <p>
          <img src="https://www.thecodingspace.com/img/c4c-email-confirm.png" />
        </p>
        <p>
          If you made the account with The Coding Space, we can help you. Just
          email us at support@thecodingspace.com and we’ll help you to fully
          activate your account. Otherwise, you need to activate your account
          using the email you registered it with.
        </p>

        <p>
          To test your project’s sharing capabilities, simply click the link on
          the Project Page which says Copy Link and copy the link into the
          browser of an incognito window to make sure it is publicly visible. If
          you can see the project when not signed into the account that made it,
          your link is ready to submit!
        </p>
        <h3>WoofJS</h3>
        <p>
          All WoofJS projects are public. Just click the fullscreen button, then
          copy the URL in your browser’s bar. It will look like this one:{" "}
          <a href="https://woofjs.com/full.html#c4cexample" target="_blank">
            https://woofjs.com/full.html#c4cexample
          </a>
        </p>
        <h3>Other Platforms & Languages</h3>
        <p>
          Just make sure to link to the public version of your project. If you
          have trouble figuring out how to do this, please just contact us at
          support@thecodingspace.com
        </p>
      </div>
    </>
  );
}
