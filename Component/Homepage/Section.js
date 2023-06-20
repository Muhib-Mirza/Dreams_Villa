import { motion } from "framer-motion";
import style from "@/styles/homepage/Section.module.css";
import React, { useState } from 'react'

const Section = () => {
    
  const [scimage, setScImage] = useState({
    house: false,
    indust: false,
    commerc: false,
    land: false,
  });
  const [flag, setFlag] = useState(false);
  const [sectionflag, setSectionFlag] = useState(false);

  const secParent = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.2,
        repeat: 0,
      },
    },
  };

  const secChild = {
    hidden: {
      y: "7rem",
      opacity: 0,
      backgroundColor: "#F3F5F1",
    },
    animate: {
      y: "0rem",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 160,
        duration: 0.1,
        damping: 14.5,
        repeat: 0,
      },
    },
  };
    return ( 
        <>
        <div className={style.head}>
        <motion.h1
          onViewportEnter={() => {
            setFlag(true);
          }}
          initial={{
            opacity: flag ? 1 : 0,
            y: flag ? "0rem" : "5rem",
          }}
          whileInView={{
            y: "0rem",
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 0.2,
            stiffness: 100,
            damping: 11,
          }}
          className={style.pcHead}
        >
          Our Categories & Places
        </motion.h1>
        <motion.h1
          onViewportEnter={() => {
            setFlag(true);
          }}
          className={style.mobHead}
          initial={{
            opacity: flag ? 1 : 0,
            translateY: flag ? "0rem" : "5rem",
          }}
          whileInView={{
            translateY: "0rem",
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 0.2,
            stiffness: 150,
          }}
        >
          Our Categories
        </motion.h1>
      </div>

      {/* Section Card */}

      <motion.div
        onViewportEnter={() => {
          setSectionFlag(true);
        }}
        className={style.cContainer}
        variants={secParent}
        initial={"hidden"}
        animate={sectionflag ? "animate" : "hidden"}
        whileInView={{ repeatCount: 0 }}
      >
        <motion.a
          href="/type/RESEDENTIAL"
          variants={secChild}
          className={style.card}
          onMouseEnter={() => {
            setScImage({
              house: true,
            });
          }}
          onMouseLeave={() => {
            setScImage({
              house: false,
            });
          }}
          whileHover={{
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <motion.img
            src="/House(1).png"
            alt=""
            className={style.cImage}
            animate={
              scimage.house
                ? {
                    scale: 1.2,
                  }
                : {
                    scale: 1,
                  }
            }
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
          />
          <motion.div
            className={style.cText}
            animate={
              scimage.house
                ? {
                    marginTop: "0.8rem",
                    fontSize: "1.3rem",
                    color: "white",
                  }
                : {
                    fontSize: "1.1rem",
                    marginTop: "0.2rem",
                    color: "black",
                  }
            }
          >
            Resedential
          </motion.div>
        </motion.a>
        <motion.a
          href="/type/LAND"
          className={`${style.card} ${style.cmgn} `}
          variants={secChild}
          onViewportEnter={() => {
            setSectionFlag(true);
          }}
          onMouseEnter={() => {
            setScImage({
              land: true,
            });
          }}
          onMouseLeave={() => {
            setScImage({
              land: false,
            });
          }}
          whileHover={{
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <motion.img
            src="/architect.png"
            alt=""
            className={style.cImage}
            animate={
              scimage.land
                ? {
                    scale: 1.2,
                  }
                : {
                    scale: 1,
                  }
            }
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
          />
          <motion.div
            className={style.cText}
            animate={
              scimage.land
                ? {
                    marginTop: "0.8rem",
                    fontSize: "1.3rem",
                    color: "white",
                  }
                : {
                    fontSize: "1.1rem",
                    marginTop: "0.2rem",
                    color: "black",
                  }
            }
          >
            Land
          </motion.div>
        </motion.a>
        <motion.a
          href="/type/COMMERCIAL"
          className={`${style.card} ${style.cmgn} ${style.thirdCmgn}`}
          variants={secChild}
          onMouseEnter={() => {
            setScImage({
              commerc: true,
            });
          }}
          onMouseLeave={() => {
            setScImage({
              commerc: false,
            });
          }}
          whileHover={{
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <motion.img
            src="/building.png"
            alt=""
            className={style.cImage}
            animate={
              scimage.commerc
                ? {
                    scale: 1.2,
                  }
                : {
                    scale: 1,
                  }
            }
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.1,
            }}
          />
          <motion.div
            className={style.cText}
            animate={
              scimage.commerc
                ? {
                    marginTop: "0.8rem",
                    fontSize: "1.3rem",
                    color: "white",
                  }
                : {
                    fontSize: "1.1rem",
                    marginTop: "0.2rem",
                    color: "black",
                  }
            }
          >
            Commercial
          </motion.div>
        </motion.a>
        <motion.a
          href="/type/FACTORY"
          className={`${style.card} ${style.cmgn} ${style.fourthCmgn}`}
          variants={secChild}
          onMouseEnter={() => {
            setScImage({
              indust: true,
            });
          }}
          onMouseLeave={() => {
            setScImage({
              indust: false,
            });
          }}
          whileHover={{
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <motion.img
            src="/factory.png"
            alt=""
            className={style.cImage}
            animate={
              scimage.indust
                ? {
                    scale: 1.2,
                  }
                : {
                    scale: 1,
                  }
            }
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
          />
          <motion.div
            className={style.cText}
            animate={
              scimage.indust
                ? {
                    marginTop: "0.8rem",
                    fontSize: "1.3rem",
                    color: "white",
                  }
                : {
                    fontSize: "1.1rem",
                    marginTop: "0.2rem",
                    color: "black",
                  }
            }
          >
            Industrial
          </motion.div>
        </motion.a>
      </motion.div>
        </>
     );
}
 
export default Section;