import React from "react";
import "../styles/components/Button.scss";

export default function Button({ content, icon = "", color = "red" }) {
  return (
    <button className={`${color}`}>
      {content} {icon}
    </button>
  );
}
