import React from "react";
import "./FeatureCard.css";
import { motion } from "framer-motion/dist/framer-motion";

function FeatureCard({ title, description, variants, animate }) {
  return (
    <>
      <motion.div
        className="card__container"
        variants={variants}
        animate={animate}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </motion.div>
    </>
  );
}


export default FeatureCard;
