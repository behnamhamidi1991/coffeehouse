"use client";
import Top from "./components/Top/Top";
import Slider from "./components/Slider/Slider";
import CoffeeHouse from "./components/CoffeeHouse/CoffeeHouse";
import Staff from "./components/Staff/Staff";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Top />
      <Slider />
      <CoffeeHouse />
      <Staff />
    </>
  );
}
