import React from "react";
import ProductCard from "../productCard/ProductCard";
// import {Link} from 'react-router-dom'
import { newProducts } from "../../../data/product";

import "./Products.css";

console.log(newProducts[0].products);

function Products() {
  return (
    <>
      <div className="product__header">
        <h2>Product Categories</h2>
      </div>
      <div className="lamp_prod-container lamp_prod-courier">
        <div className="lamp_prod-texts">
          <h2>Courier & Logistics Solutions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            tellus urna, ultrices cras congue. Sit pulvinar vitae tellus,
            lacinia at.
          </p>
        </div>
        <div className="lamp_prod-card-container">
          <ProductCard productData={newProducts[0].products} />
        </div>
      </div>
      <div className="lamp_prod-container lamp_prod-delivery">
        <div className="lamp_prod-texts">
          <h2>Delivery & Ecommerce Solutions </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            tellus urna, ultrices cras congue. Sit pulvinar vitae tellus,
            lacinia at.
          </p>
        </div>
        <div className="lamp_prod-card-container">
          <ProductCard productData={newProducts[1].products} />
        </div>
      </div>
      <div className="lamp_prod-container lamp_prod-health">
        <div className="lamp_prod-texts">
          <h2>Health & Consultation solutions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            tellus urna, ultrices cras congue. Sit pulvinar vitae tellus,
            lacinia at.
          </p>
        </div>
        <div className="lamp_prod-card-container">
          <ProductCard productData={newProducts[2].products} />
        </div>
      </div>
      <div className="lamp_prod-container lamp_prod-transport">
        <div className="lamp_prod-texts">
          <h2>Transport & Mobility Solutions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            tellus urna, ultrices cras congue. Sit pulvinar vitae tellus,
            lacinia at.
          </p>
        </div>
        <div className="lamp_prod-card-container">
          <ProductCard productData={newProducts[3].products} />
        </div>
      </div>
      <div className="lamp_prod-container lamp_prod-banking">
        <div className="lamp_prod-texts">
          <h2>Banking & Financial Solutions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            tellus urna, ultrices cras congue. Sit pulvinar vitae tellus,
            lacinia at.
          </p>
        </div>
        <div className="lamp_prod-card-container">
          <ProductCard productData={newProducts[4].products} />
        </div>
      </div>
      <div className="lamp_prod-container lamp_prod-food">
        <div className="lamp_prod-texts">
          <h2>Food & Hospitality Solutions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            tellus urna, ultrices cras congue. Sit pulvinar vitae tellus,
            lacinia at.
          </p>
        </div>
        <div className="lamp_prod-card-container">
          <ProductCard productData={newProducts[5].products} />
        </div>
      </div>
      <div className="lamp_prod-container lamp_prod-edtech">
        <div className="lamp_prod-texts">
          <h2>EdTech Solutions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            tellus urna, ultrices cras congue. Sit pulvinar vitae tellus,
            lacinia at.
          </p>
        </div>
        <div className="lamp_prod-card-container">
          <ProductCard productData={newProducts[6].products} />
        </div>
      </div>
      <div className="lamp_prod-container lamp_prod-business">
        <div className="lamp_prod-texts">
          <h2>Business Productivity Solutions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            tellus urna, ultrices cras congue. Sit pulvinar vitae tellus,
            lacinia at.
          </p>
        </div>
        <div className="lamp_prod-card-container">
          <ProductCard productData={newProducts[7].products} />
        </div>
      </div>
    </>
  );
}

export default Products;
