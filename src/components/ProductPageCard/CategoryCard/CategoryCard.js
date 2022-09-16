import React from "react";
import "./CategoryCard.css";
import { FaArrowRight } from "react-icons/fa";

function CategoryCard({ logo, tagline, cta }) {
  return (
    <>
      <div className="categoryCard__container">
        <div className="card__logo">
          <h1>FoodX</h1>
        </div>
        <div className="card__tagline">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card__cta">
          <h3>Know more</h3>
          <span>
            <FaArrowRight />
          </span>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
