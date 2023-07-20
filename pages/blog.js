import React from "react";
import style from "@/styles/Blogpage/blog.module.css";
import Navbar from "@/Component/Navbar";
import Fotter from "@/Component/Fotter";
import Cards from "@/Component/Blog/Card";
import Cards2 from "@/Component/Blog/Card2";

const Blog = () => {
    return ( 
        <>
        <Navbar />
        <div className={style.container}>
        <div className={style.blogHead}>
        <div >
          <a href="/" className={style.homeLink}>Home <span className={style.arrow}>&gt;</span> </a>
          <span className={style.blogText} style={{
            marginLeft:"0.2rem"
          }} >Blog <span className={style.arrow}>&gt;</span></span>
        </div>
        <div className={style.blogHeading}>Blog</div>
        </div>
        </div>
        <Cards />
        <Cards2 />
        <Fotter />
        </>
     );
}
 
export default Blog;