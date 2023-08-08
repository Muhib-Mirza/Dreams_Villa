import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// export async function getServerSideProps(context){
//     const resp = await axios.get("http://localhost:4000/addproperty");
//     const response = resp.data;
//     return{
//         props:{
//             data : response
//         }
//     }
// }

const AddProperty = ({data}) => {
    console.log(data)
    const router = useRouter();
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        const resp = axios.get("https://real-estate-d96g.onrender.com/authentication",{
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