import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

export async function getServerSideProps(context){
  const data = JSON.parse(context.query.data);
  const search = JSON.parse(context.query.search);
  const resp = await axios.get(`http://localhost:4000/search/${search}`,data);
  let response;
  if(resp.data === "Failed"){
    response = "Failed"
  }else{
    response = resp.data
  }
  return{
    props:{
      data: response
    }
  }
}

const Search = ({data}) => {
  console.log(data.data);
    return ( 
        <>
        {
          data.data === "Failed" ?
          toast.error("Data Not Found")
          :
          <h1>
          Hello World
        </h1>
        }
        <ToastContainer/>
        </>
     );
}
 
export default Search;