import style from "@/styles/homepage/Fotter.module.css";

const Fotter = () => {
    return ( 
        <>
        <div className={ style.footer }>
            <div className={ style.footText }>
                Dream Villa
                <div className={ style.footSmall }>
                    Real Estate Agency
                </div>
            </div>
        <div className={ style.social }>
            <a href="http://">
            <img src="/insta.svg" alt="insta" className={` ${style.socialPic} ${ style.ipic } `} />
            </a>
            <a href="http://">
            <img src="/facebook.svg" alt="facebook" className={ style.socialPic } />
            </a>
            <a href="">
                <img src="/twitter.svg" alt="twitter" className={ style.socialPic } />
            </a>
        </div>
        <div className={ style.copyRight }>
        Copyright ©2023 All rights reserved by DreamVilla
        </div>
        </div>
        </>
     );
}
 
export default Fotter;