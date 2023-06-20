import style from "@/styles/homepage/About.module.css";
import CountUp from "react-countup";
import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [flag, setFlag] = useState({
    years: false,
    property: false,
    realtor: false,
  });
  const [animeflag, setAnimeFlag] = useState(false);
  const variant = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      repeatCount: 0,
      transition: {
        duration: 0.2,
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
        type: "spring",
        stiffness: 150,
        damping: 12,
        duration: 0.1,
        repeat: 0,
      },
    },
  };
  return (
    <>
      <motion.div
        className={style.container}
        onViewportEnter={() => {
          setAnimeFlag(true);
        }}
        variants={variant}
        initial={"hidden"}
        animate={animeflag ? "animate" : "hidden"}
        whileInView={{ repeatCount: 0 }}
      >
        <motion.img
          src="/about.jpg"
          alt="About"
          className={style.image}
          variants={childVariant}
        />
        <div className={style.aboutSection} variants={childVariant}>
          <motion.div className={style.text} variants={childVariant}>
            About Us
          </motion.div>
          <motion.div className={style.aboutHead} variants={childVariant}>
            Dream Villa A Real Estate Company
          </motion.div>
          <motion.div className={style.mobAboutHead} variants={childVariant}>
            Dream Villa
          </motion.div>
          <motion.img
            src="/work-1.jpg"
            alt="Home Pic"
            className={`${style.aboutPic} ${ style.mobAboutPic }`}
            variants={childVariant}
          />
          <motion.p className={style.aboutText} variants={childVariant}>
            Welcome to our premier real estate agency, where we specialize in
            helping our clients find their dream properties. Our team of
            experienced agents is dedicated to providing exceptional service and
            expertise to help you navigate the complex world of real estate.
            Whether you're a first-time homebuyer, a seasoned investor, or
            looking to sell your property, we are here to guide you every step of the way.
          </motion.p>
          <div className={style.counterContainer}>
            <motion.div className={style.years} variants={childVariant}>
              <motion.div whileInView={() => setFlag({ years: true })}>
                {flag.years ? (
                  <h1>
                    <CountUp end={50} duration={1} delay={0.2} />
                  </h1>
                ) : (
                  <h1>0</h1>
                )}
              </motion.div>
              <h3>YEARS OF EXPERIENCED</h3>
            </motion.div>
            <motion.div className={style.realtor} variants={childVariant}>
              <motion.div
                whileInView={() => setFlag({ years: true, property: true })}
              >
                {flag.years ? (
                  <h1>
                    <CountUp end={210} duration={1} delay={0.2} />
                    <span className={style.postfix}>K+</span>
                  </h1>
                ) : (
                  <h1>0</h1>
                )}
              </motion.div>
              <h3>TOTAL PROPERTIES</h3>
            </motion.div>
            <motion.div className={style.realtor} variants={childVariant}>
              <motion.div
                whileInView={() =>
                  setFlag({ years: true, property: true, realtor: true })
                }
              >
                {flag.years ? (
                  <h1>
                    <CountUp end={450} duration={1} delay={0.2} />
                  </h1>
                ) : (
                  <h1>0</h1>
                )}
              </motion.div>
              <h3>QUALIFIED REALTORS</h3>
            </motion.div>
            <motion.div className={style.realtor} variants={childVariant}>
              <motion.div
                whileInView={() =>
                  setFlag({ years: true, property: true, realtor: true })
                }
              >
                {flag.years ? (
                  <h1>
                    <CountUp end={100} duration={1} delay={0.2} />
                  </h1>
                ) : (
                  <h1>0</h1>
                )}
              </motion.div>
              <h3>TOTAL BRANCHES</h3>
            </motion.div>
          </div>
          <motion.img
            src="/work-1.jpg"
            alt="Home Pic"
            className={style.aboutPic}
            variants={childVariant}
          />
        </div>
      </motion.div>
    </>
  );
};

export default About;
