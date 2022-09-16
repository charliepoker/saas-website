import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import Button from "../ProductPageButton/Button";

function ProductCard({ title, description }) {
  return (
    <>
      <div className="product__card">
        <div className="logo__tile">
          <h5>{title}</h5>
        </div>
        <p>{description}</p>
        <div className="button__container">
          <Link to="/products">
            <Button text="Get Started" btnStyle="btn__primary" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
