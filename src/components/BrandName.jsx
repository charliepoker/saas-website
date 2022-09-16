import React from "react";
import "../styles/components/BrandName.scss";

function BrandName({ isFooter = false }) {
  return (
    <div className={`brand ${isFooter === true ? "footer" : ""}`}>
      <img src={"../assets/lampnet-logo.png"} alt="" />
    </div>
  );
}

export default BrandName;
