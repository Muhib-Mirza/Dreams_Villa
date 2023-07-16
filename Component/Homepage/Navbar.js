import style from "@/styles/homepage/Navbar.module.css";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import React from 'react';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsFillHeartFill, BsBuildingFillAdd } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineHome , HiPhone , HiOutlineUserGroup } from "react-icons/hi";


const Navbar = () => {
  const parentNav={
    initial:{
      opacity:0
    },
    animate:{
      opacity:1,
      transition:{
        type:"tween",
        duration:0.2,
        staggerChildren: 0.2,
      }
    }
  }
  const onHover ={
      hover: {
        color:"#00D4FF"
      }
  }
  const childNav = {
    initial:{
      opacity:0,
      y:-50,
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        type:"tween",
        duration:0.2,
      }
    }
  };
  const [flag, setFlag] = useState(false);
  const toggle = ()=>{
    setFlag(!flag);
    if(flag === true){ 
      document.querySelector("body").style.overflowY = "scroll"
    }else{
        document.querySelector("body").style.overflowY = "hidden"
      }
  }
  return (
    <>
      <Head>
        <title>Dream Villa</title>
        <meta name="description" content="Dream Villa. All kind of Property is Availabla here." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/house.png" />
      </Head>
      <nav className={style.navbar}>
      <div className={style.logo}>
            Dream Villa
            <div className={style.wname}>Real Estate Agency</div>
          </div> 
            <motion.a className={`${style.link} ${style.navbtn} ${style.propt}`} href="/addproperty"
            style={{
              top:"1.2rem"
            }}>
            <motion.button
            initial={{
              y:-50,
              opacity:0
            }}
            animate={{
              y:0,
              opacity:1,
            }}
            transition={{
              type:"tween",
              delay:1.2,
              duration:0.2,
            }}
            whileTap={{
              scale:0.85
            }}
              className={`${style.btnmgn} ${style.btnpropt}`}>
              Submit Property
            </motion.button>
          </motion.a>
        <div className={style.navListContainer}>
          <motion.ul className={style.navList}
          variants={parentNav}
          animate={"animate"}
          initial="initial"
          >
            <motion.a variants={childNav} className={`${style.link} ${style.nomgn}`} href="/">
              <motion.li
                className={style.navText}
                variants={onHover}
                whileHover={"hover"}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
              >
                Home
              </motion.li>
            </motion.a>
            <motion.a variants={childNav} className={style.link} href="/about">
              <motion.li
                variants={onHover}
                whileHover={"hover"}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
                className={style.navText}
              >
                About
              </motion.li>
            </motion.a>
            <motion.a variants={childNav} className={style.link} href="/property" style={{
              width:"6rem"
            }} >
              <motion.li
                className={style.navText}
                variants={onHover}
                whileHover={"hover"}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
              >
                Property
              </motion.li>
            </motion.a>
            <motion.a variants={childNav} className={style.link} href="/blog" style={{
              width:"4rem"
            }} >
              <motion.li
                className={style.navText}
                variants={onHover}
                whileHover={"hover"}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
              >
                Blog
              </motion.li>
            </motion.a>
            <motion.a variants={childNav} className={style.link} href="/wishlist">
              <motion.li
                className={style.navText}
                variants={onHover}
                whileHover={"hover"}
                transition={{
                  type: "tween",
                  stiffness: 150,
                  duration: 0.2,
                }}
              >
                WishList
              </motion.li>
            </motion.a>
            <motion.a variants={childNav} className={style.link} href="/contact">
              <motion.li
                className={style.navText}
                variants={onHover}
                whileHover={"hover"}
                transition={{
                  type: "tween",
                  stiffness: 150,
                  duration: 0.2,
                }}
              >
                Contact
              </motion.li>
            </motion.a>
          </motion.ul>
        </div>
        {/* Drawer Code */}
        <div className={style.drawerImage} onClick={toggle} >
          <img src="/drawer.svg" alt="Drawer" className={style.drawerIcon} />
        </div>
        <motion.div className={ style.drawer }
        initial={{
          y:"-150vh",
          opacity:0,
        }
        }
        animate={
          flag ?{
            y:0,
            opacity:1,
          }:{
            y:"-150vh",
            opacity:0,
          }
        }
        transition={{
          type:"tween",
          ease:"easeInOut",
          duration:0.3,
        }}
        >
          <div className={style.title}>
          <h2 className={style.drwerlogo}>
            Dream Villa
          </h2>
          <RxCross1 className={style.cross} onClick={toggle} />
          </div>
          <ul className={style.list}>
            <li className={style.listTile}>
            <a href="/" className={style.link}>
              <HiOutlineHome className={style.homeIcon} />
              <div className={style.headHome}>
              Home
              </div>
            </a>
            </li>
            <li className={style.listTile}>
            <a href="/property" className={style.link}>
              <HiOutlineBuildingOffice2 className={style.homeIcon} />
              <div className={`${style.headHome} ${style.propt}`}>
              Property
              </div>
            </a>
            </li>
             <li className={style.listTile}>
              <a href="/wishlist" className={style.link}>
                <BsFillHeartFill className={style.homeIcon} />
                <div className={style.headHome}>
                WishList
                </div>
              </a>
              </li>
            <li className={style.listTile}>
            <a href="/about" className={style.link}>
              <HiOutlineUserGroup className={style.homeIcon} />
              <div className={style.headHome}>
              About
              </div>
            </a>
            </li>
            <li className={style.listTile}>
            <a href="/contact" className={style.link}>
              <HiPhone className={style.homeIcon} />
              <div className={`${style.headHome} ${style.propt}`}>
              Contact
              </div>
            </a>
            </li>
            <li className={style.listTile}>
            <a href="/addproperty" className={`${style.link} ${style.drawerpropt}`}>
              <BsBuildingFillAdd className={style.homeIcon} />
              <div className={style.headHome}>
              Submit Property
              </div>
            </a>
            </li>
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;