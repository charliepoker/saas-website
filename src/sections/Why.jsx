import React from "react";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/sections/Why.scss";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../utils/Animations";

function Why() {
  const [element, controls] = useScroll();

  return (
    <div className="why-container" id="services" ref={element}>
      <div className="container">
        <motion.div
          className="top"
          variants={topContainerAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title="Why LAMPNET ?" color="red" lineCenter={true} />
          <div className="subTitle">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              suscipit nam. Molestiae repellendus qui quisquam?
            </p>
          </div>
        </motion.div>
        <div className="content">
          <motion.div
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className="video">
              <GoPlay />
            </div>
          </motion.div>
          <motion.div
            className="reasons"
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur  elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur  elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur  elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur  elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur  elit.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Why;
