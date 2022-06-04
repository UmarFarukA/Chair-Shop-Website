import React from "react";

function Section(props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="features-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d={props.icon} />
      </svg>
      <p className="features-title">
        <strong>{props.label}</strong>
      </p>
      <p className="features-text">{props.text}</p>
    </div>
  );
}

export default Section;
