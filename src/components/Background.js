import React from "react";
import "./styles/StyledBackground.css";

function Background({ children }) {
  return (
    <>
      <div id="stars"></div>
      {children}
    </>
  );
}

export default Background;
