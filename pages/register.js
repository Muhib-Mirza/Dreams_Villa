import axios from "axios";
import { useState } from "react";
import style from "@/styles/Login.module.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import Head from "next/head"

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectCreative } from "swiper";
import Navbar from "@/Component/Homepage/Navbar";
import Fotter from "@/Component/Homepage/Fotter";

const Joinus = () => {
  const router = useRouter();
  const [image,setImage] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    pass: "",
    contact:"",
  });
  const [animateFlag, setAnimateFlag] = useState(false);
  const [placeHolder, setPlaceHolder] = useState({
    user:"Username",
    email:"Email",
    pass:"Password",
    contact:"Contact",
  });
  const [input, setInput] = useState({
    user:false,
    email:false,
    pass:false,
    contact:false,
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
    const formdata = new FormData();
    formdata.append("uname",user.username);
    formdata.append("email",user.email);
    formdata.append("pass",user.pass);
    formdata.append("contact",user.contact);
    formdata.append("avatar",image);
    axios.post("http://localhost:4000/register", formdata).then((result) => {
      console.log(result.data);
      if(result.data.message === "Success"){
        toast.success("User Added");
        setTimeout(()=>{
          router.push("/");
        },1000)
      }else{
        toast.error("User Already Exist");
      }
    });
  };
  const handleImage = (e)=>{
    setImage(e.target.files[0]);
  }
  const handleButton = () => {
    if (
      email.test(user.email) == false ||
      user.username === "" ||
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
      <Navbar />
      <div className={style.container}>
      <div className={style.slidercontainer}>
      <Swiper
        spaceBetween={50}
        pagination={true}
        grabCursor={true}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, EffectCreative]}
        className={`mySwiper ${style.swiper}`}
      >
        <SwiperSlide>
            <div className={style.sliderbody}>
            <img src="/buildingbg.png" alt="log" className={style.sliderimage} />
            <h3 className={style.sliderhead}>Browse a Wide Range of Properties</h3>
            <div className={style.slidertext}>
              Explore thousand of property listings and save your favorites across devices
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div className={style.sliderbody}>
            <img src="/office.png" alt="log" className={style.sliderimage} />
            <h3 className={style.sliderhead}>
              Empowering Your Real Estate Journey
            </h3>
            <div className={style.slidertext}>
              Join the Million of Users on Dream Villa and Take Your Real Estate Journey to the Next Level
            </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.logo}>
            <img src="/logo.png" alt="" className={style.logoimage} />
          </div>
          <h1 className={style.heading}>Sign Up</h1>
          <div className={style.inptContainer}>
            <motion.img src="/user.png" alt="" className={style.image} 
            initial={{
              bottom:"0.5rem"
            }}
            animate={
              input.user || user.username != "" ? {
                bottom:"2.2rem",
                width:"1.2rem"
              }:{
                bottom:"0.5rem"
              }
            } 
            transition={{
              type:"tween",
              duration:0.2,
            }}
            />
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className={style.input}
              placeholder={placeHolder.user}
              onClick={()=>{setPlaceHolder({user:"",email:"Email",pass:"Password",contact:"Contact",});
              setInput({user:true});
            }}
              onBlur={()=>{setPlaceHolder({user:"Username",email:"Email",pass:"Password",contact:"Contact"});
              setInput({user:false})
            }}
              required
            />
          </div>
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
              onClick={()=>{setPlaceHolder({user:"Username",email:"",pass:"Password",contact:"Contact"});
              setInput({email:true});
            }}
              onBlur={()=>{setPlaceHolder({user:"Username",email:"Email",pass:"Password",contact:"Contact"});
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
              onClick={()=>{setPlaceHolder({user:"Username",email:"Email",pass:"",contact:"Contact"});
              setInput({pass:true});
            }}
              onBlur={()=>{setPlaceHolder({user:"Username",email:"Email",pass:"Password",contact:"Contact"});
              setInput({pass:false})
            }}
            placeholder={placeHolder.pass}
            minLength={6}
              required
            />
          </div>
          <div className={style.inptContainer}>
            <motion.img src="/phone.png" alt="" className={style.image} 
            initial={{
              bottom:"0.5rem"
            }}
            animate={
              input.contact || user.contact != "" ? {
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
              type="text"
              name="contact"
              value={user.contact}
              onChange={handleChange}
              className={style.input}
              onClick={()=>{setPlaceHolder({user:"Username",email:"Email",pass:"Password",contact:""});
              setInput({contact:true});
            }}
              onBlur={()=>{setPlaceHolder({user:"Username",email:"Email",pass:"Password",contact:"Contact"});
              setInput({contact:false})
            }}
            placeholder={placeHolder.contact}
            minLength={6}
              required
            />
          </div>
          <div className={`${style.inptContainer} ${style.filecont}`}>
            <span className={style.span}>Enter Avatar :</span>
            <input
              type="file"
              name="image"
              onChange={handleImage}
              className={`${style.input} ${style.file}`}
            placeholder="Enter Image"
              required
            />
          </div>
          <button
            type="submit"
            onMouseEnter={handleButton}
            onClick={handleButton}
            className={`btn ${style.btn}`}
          >
            Register
          </button>
          <div className={style.sign}>
            Already have an Account?<a href="/sign" className={style.link} >SignIn Now</a>
          </div>
        </form>
      </div>
      <Fotter />
      <ToastContainer />
    </>
  );
};

export default Joinus;