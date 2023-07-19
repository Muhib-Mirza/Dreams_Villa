import React from "react";
import style from "@/styles/Blogpage/blog.module.css";
import Navbar from "@/Component/Homepage/Navbar";
import Fotter from "@/Component/Homepage/Fotter";

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
        <Fotter />
        </>
     );
}
 
export default Blog;