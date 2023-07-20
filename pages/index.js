import React, { useEffect, useState } from "react";
import axios from "axios";

import Carousel from "@/Component/Homepage/Carousel";
import Searchbar from "@/Component/Homepage/SearchBar";
import Fotter from "@/Component/Fotter";
import Navbar from "@/Component/Navbar";
import About from "@/Component/Homepage/about";
import Section from "@/Component/Homepage/Section";
import Cards from "@/Component/Homepage/Cards";


export async function getServerSideProps(context){
  
  // const res = await axios.get("http://localhost:4000/homedata");
  const res = await axios.get("https://real-estate-d96g.onrender.com/homedata");
  const resp = res.data;
  return{
    props:{
      data : resp
    }
  }
}

export default function Home({data}) {
  return (
    <>
      <Navbar />
      <Carousel />
      <Searchbar />
      <Section />
      <Cards data = {data} />
      <About />
      <Fotter />
    </>
  );
}
