import React from "react";
import style from "@/styles/Blogpage/cards.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
const Cards = () => {
  const [animeflag, setAnimeFlag] = useState(false);
  const variant = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      repeatCount: 0,
      transition: {
        duration: 0.1,
        repeatCount: 0,
        staggerChildren: 0.1,
        repeat: 0,
      },
    },
  };
  const childVariant = {
    hidden: {
      opacity: 0,
      y: "10rem",
    },
    animate: {
      opacity: 1,
      y: "0rem",
      repeatCount: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        repeat: 0,
      },
    },
  };

  return (
    <>
      <motion.div
        className={style.cardContainer}
        onViewportEnter={() => {
          setAnimeFlag(true);
        }}
        variants={variant}
        initial={"hidden"}
        animate={animeflag ? "animate" : "hidden"}
      >
        <motion.div className={style.card} variants={childVariant}>
          <img src="/Blog/card1.jpg" alt="About2" className={style.cardImage} />

          <h2 className={style.cardHeading}>
            Your Gateway to Exceptional Homes
          </h2>

          <p className={style.cardText}>
            We believe the 36, nearly 40, billion pound discount given for a
            right to buy houses took a million houses out of the public housing
            sector which is desperately needed for rent.
          </p>
        </motion.div>

        <motion.div className={style.card} variants={childVariant}>
          <img src="/Blog/card2.jpg" alt="About2" className={style.cardImage} />

          <h2 className={style.cardHeading}>
            Unlock The Door To Your Dream Home
          </h2>

          <p className={style.cardText}>
            A strong economy causes an increase in the demand for housing; the
            increased demand for housing drives real-estate prices and rentals
            through the roof. And then affordable housing becomes completely
            inaccessible
          </p>
        </motion.div>

        <motion.div className={style.card} variants={childVariant}>
          <img
            src="/Blog/card3.jpg"
            alt="About2"
            className={style.cardImage}
            variants={childVariant}
          />

          <h2 className={style.cardHeading} variants={childVariant}>
            Your Path to Homeownership Starsts Here
          </h2>

          <p className={style.cardText} variants={childVariant}>
            In the housing projects, people talked of ways to reduce crime,
            relieve overcrowding, and they were good ideas that we plan to
            study, and possibly implement.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Cards;
