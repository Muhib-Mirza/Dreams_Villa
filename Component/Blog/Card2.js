import React from "react";
import style from "@/styles/Blogpage/cards.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
const Card = () => {
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
        staggerChildren: 0.2,
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
        duration: 0.4,
        repeat: 0,
      },
    },
  };

  return (
    <>
      <div className={style.cardSection}>
        <h2 className={style.sectionHead}>NAMES & Events</h2>
      </div>

      <motion.div
        style={{
          marginBottom: "1.5rem",
        }}
        className={style.cardContainer}
        onViewportEnter={() => {
          setAnimeFlag(true);
        }}
        variants={variant}
        initial={"hidden"}
        animate={animeflag ? "animate" : "hidden"}
      >
        <motion.div className={style.card2} variants={childVariant} >
          <img
            src="/Blog/explore1.png"
            alt="About2"
            className={style.cardImage}
          />

          <h2 className={style.cardHeading}>Real Estate Excellence Awaits</h2>

          <p className={style.cardText}>
            Public housing is more than just a place to live, public housing
            programs should provide opportunities to residents and their
            families.
          </p>
        </motion.div>

        <motion.div className={style.card2} variants={childVariant} >
          <img
            src="/Blog/explore3.png"
            alt="About2"
            className={style.cardImage}
          />

          <h2 className={style.cardHeading}>Steps into a World of Luxury</h2>

          <p className={style.cardText}>
            People have to take responsibility for themselves. We need to get
            the housing industry going again. We don't need government
            intervening in every step.
          </p>
        </motion.div>

        <motion.div className={style.card2} variants={childVariant} >
          <img
            src="/Blog/explore2.png"
            alt="About2"
            className={style.cardImage}
          />

          <h2 className={style.cardHeading}>Discover Endless Possibilities</h2>

          <p className={style.cardText}>
            We should concentrate our work not only to a separated housing
            problem but housing involved in our daily work and all the other
            functions of the city.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};
export default Card;
