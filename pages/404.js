import React from 'react'
import style from "@/styles/Errorpage/Error.module.css";
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ErrorPage() {
    const router = useRouter();
  return (
    <>
    <Head>
        <title>Dream Villa</title>
        <meta name="description" content="Dream Villa. All kind of Property is Availabla here." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/house.png" />
      </Head>
    <div className={style.container}>
        <h1 className={style.statusCode}>404</h1>
        <div className={style.errorLine}>We Hear you knocking, but you can't come in.</div>
        <button className={style.btn} onClick={()=>{
            router.push("/");
        }}>Go Back Home</button>
        <div className={style.blackBox}></div>
    </div>
    </>
  )
}
