import React from "react";
import useTypewriter from "../../hooks/useTypewriter";
import "./TypewriterText.css";

function TypewriterText({ words }) {
  const displayText = useTypewriter(words);

  return (
    <h1 className="typewriter-text">
      {displayText}
      <span className="cursor">|</span>
    </h1>
  );
}

export default TypewriterText;
