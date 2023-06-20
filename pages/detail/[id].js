import axios from "axios";

export async function getServerSideProps(context){
    const id = context.query.id;
    const resp = await axios.get(`http://localhost:4000/detail/${id}`);
    console.log(resp.data)
    return{
        props:{
            data:"hello"
        }
    }
}

const Detail = ({data}) => {
    return ( 
        <>
        <h1>Hello</h1>
        </>
     );
}
 
export default Detail;