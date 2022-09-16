import React from 'react'
import Starter from '../../sections/Starter'
import About from '../../sections/About'
import Why from '../../sections/Why'
import Testimonials from '../../sections/Testimonials'
import Product from "../../components/productCard/products/Products"
import Features from '../../sections/Features'

function homepage() {
  return (
    <>
      <Starter />
      <About />
      <Why /> 
      <Product/>
      <Testimonials /> 
      <Features /> 
    </>
  );
}

export default homepage