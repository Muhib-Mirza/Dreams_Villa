// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectCreative, Navigation } from "swiper";

import axios from "axios";
import { useState } from "react";
import style from "@/styles/Log.module.css";h
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import Head from "next/head"

const Login = () => {
    const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });
  const [animateFlag, setAnimateFlag] = useState(false);
  const [placeHolder, setPlaceHolder] = useState({
    email:"Email",
    pass:"Password"
  });
  const [input, setInput] = useState({
    email:false,
    pass:false
  })

  let x = 0;
  const email = /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/signIn", user).then((result) => {
      if(result.data.data === "Failed"){
        toast.error("Please Enter Correct Credential");
      }else{
        toast.success("LogIn Success");
        setTimeout(()=>{
          router.push("/");
        },1000)
      }
    });
  };
  const handleButton = () => {
    if (
      email.test(user.email) == false ||
      user.pass === "" 
    ) {
      setAnimateFlag(false);
      if (animateFlag == false) {
        if (x % 2 == 0) {
          document.querySelector(".btn").style.transform = "translateX(75px)";
          x++;
        } else {
          document.querySelector(".btn").style.transform = "translateX(-75px)";
          x++;
        }
      }else {
        setAnimateFlag(true);
        document.querySelector(".btn").style.transform = "translateX(0px)";
        document.querySelector(".btn").style.background = "linear-gradient(to bottom right,#4b48ff,#00d5ff)";
        document.querySelector(".btn").style.color = "whitesmoke";
    }
    } else {
      setAnimateFlag(true);
      document.querySelector(".btn").style.transform = "translateX(0px)";
      document.querySelector(".btn").style.background = "linear-gradient(to bottom right,#4b48ff,#00d5ff)";
      document.querySelector(".btn").style.color = "whitesmoke";
  }
  };
    return ( 
        <>
    <Head>
    <title>Dream Villa</title>
    <meta name="description" content="Dream Villa. All kind of Property is Availabla here." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/house.png" />
  </Head>
      <div className={style.container}>
        <div className={style.whiteBox}></div>
        <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.logo}>
            <img src="/logo.png" alt="" className={style.logoimage} />
          </div>
          <h1 className={style.heading}>Log In</h1>
          <div className={style.inptContainer}>
          <motion.img src="/email.png" alt="" className={style.image} 
            initial={{
              bottom:"0.5rem"
            }}
            animate={
              input.email || user.email != "" ? {
                bottom:"2.2rem",
                width:"1.2rem"
              }:{
                bottom:"0.5rem"
              }
            } 
            transition={{
              type:"tween",
              duration:0.2,
            }}/>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className={style.input}
              placeholder={placeHolder.email}
              onClick={()=>{setPlaceHolder({email:"",pass:"Password"});
              setInput({email:true});
            }}
              onBlur={()=>{setPlaceHolder({email:"Email",pass:"Password"});
              setInput({email:false})
            }}
              required
            />
          </div>
          <div className={style.inptContainer}>
            <motion.img src="/lock.png" alt="" className={style.image} 
            initial={{
              bottom:"0.5rem"
            }}
            animate={
              input.pass || user.pass != "" ? {
                bottom:"2.2rem",
                width:"1.2rem"
              }:{
                bottom:"0.5rem"
              }
            } 
            transition={{
              type:"tween",
              duration:0.2,
            }}/>
            <input
              type="password"
              name="pass"
              value={user.pass}
              onChange={handleChange}
              className={style.input}
              onClick={()=>{setPlaceHolder({email:"Email",pass:""});
              setInput({pass:true});
            }}
              onBlur={()=>{setPlaceHolder({email:"Email",pass:"Password"});
              setInput({pass:false})
            }}
            placeholder={placeHolder.pass}
            minLength={6}
              required
            />
          </div>
          <button
            type="submit"
            onMouseEnter={handleButton}
            onClick={handleButton}
            className={`btn ${style.btn}`}
          >
            Login
          </button>
          <div className={style.sign} style={{marginTop:"0.5rem"}} >
            Don't have an Account?<a href="/register" className={style.link} >Register Now</a>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
     );
}
 
export default Login;