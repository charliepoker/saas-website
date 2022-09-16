import React from 'react'
import { videoAnimation, reasonsAnimation } from "./../../utils/Animations";
import { motion } from "framer-motion/dist/framer-motion";
import { useScroll } from "../../components/UseScroll/UseScroll";
import "./AppInfo2.css";

function AppInfo2() {
    const [element, controls] = useScroll();
  return (
    <div className="app__info2__container" ref={element}>
      <motion.div
        className="app__info2_img"
        variants={videoAnimation}
        animate={controls}
        transition={{ type: "tween", duration: 0.8 }}
      >
        <img src={"./phone2.png"} alt="" className="app__info_phone" />
      </motion.div>
      <motion.div
        className="app__info2_text"
        variants={reasonsAnimation}
        animate={controls}
        transition={{ type: "tween", duration: 0.8 }}
      >
        <h3>STOCK UPDATING</h3>
        <p className="app__info2_heading">Quick updating of items on sale</p>
        <p className="app__info2_content">
          Lorem ipsum dolor sit amet, consectetur adipiscing Aliquam vel neque
          nec ex tempus varius mi in purus Cras sit amet di issim enim.
          Loremipsumsit amet consectetur adipiscing elit. Aliquam vel neque nec
          varius mi in purus maximus vulputate. Cras sit ameconsectetur
          adipiscing elit. Aliquam vel neque nec.
        </p>
        <h6>
          Explore this feature{" "}
          <span>
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699"
                stroke="#000"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                stroke="#000"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>{" "}
        </h6>
      </motion.div>
    </div>
  );
}

export default AppInfo2