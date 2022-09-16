import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/homepage/homepage";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Footer from "./sections/Footer";
// import FoodX from "./pages/FoodX/FoodX"

function App() {
  return (
    <motion.div initial="hidden" animate="show">

      <ScrollToTop />
      <Navbar />
      {/* <FoodX/> */}
      <Homepage />
      <Footer />
    </motion.div>
  );
}

export default App;
