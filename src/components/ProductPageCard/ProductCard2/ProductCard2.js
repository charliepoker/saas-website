import React from "react";
import "./ProductCard2.css";
import { BiCaretRight } from "react-icons/bi";

function ProductCard2({ product, description, category }) {
  return (
    <>
      <div className="card__main_container">
        <div className="card__sub_container">
          <ul>
            <li>
              <BiCaretRight /> {product}
            </li>
            <li>
              <BiCaretRight /> {product}
            </li>
            <li>
              <BiCaretRight /> {product}
            </li>
            <li>
              <BiCaretRight /> {product}
            </li>
          </ul>
        </div>
        <h2>{description}</h2>
        <p>{category} </p>
      </div>
    </>
  );
}

export default ProductCard2;
