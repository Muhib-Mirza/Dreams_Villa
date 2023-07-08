import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const AddProperty = () => {
    const router = useRouter();
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        const resp = axios.get("http://localhost:4000/checklog",{
            headers:{
                jwt:document.cookie
            }
        });
        resp.then(({data})=>{
            console.log(data.message1)
            if(data.message1 == "Failed"){
                router.push("/sign")
            }else{
                setFlag(true)
            }
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return ( 
        <>
        </>
     );
}
 
export default AddProperty;