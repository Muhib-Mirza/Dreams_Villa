import React, { useEffect, useState } from "react";
import axios from "axios";

import Carousel from "@/Component/Homepage/Carousel";
import Searchbar from "@/Component/Homepage/SearchBar";
import Fotter from "@/Component/Homepage/Fotter";
import Navbar from "@/Component/Homepage/Navbar";
import About from "@/Component/Homepage/about";
import Section from "@/Component/Homepage/Section";
import Cards from "@/Component/Homepage/Cards";


export async function getServerSideProps(context){
  
  const res = await axios.get("http://localhost:4000/homedata");
  const resp = res.data;
  return{
    props:{
      data : resp
    }
  }
}

export default function Home({data}) {
  const [flag,setFlag] = useState(false);
  const [flag2,setFlag2] = useState(false);
  useEffect(()=>{
    axios.get("http://localhost:4000/checklog").then((res)=>{
      console.log(res.data);
    if(res.data.message1 == true){
      setFlag(true)
    }else{
      setFlag(false)
    }
    if(res.data.message2 == true){
      setFlag2(true)
    }else{
      setFlag2(false)
    }
  })
  },[])
  return (
    <>
      <Navbar flag = {flag} flag2 = {flag2} />
      <Carousel />
      <Searchbar />
      <Section />
      <Cards data = {data} />
      <About />
      <Fotter />
    </>
  );
}
