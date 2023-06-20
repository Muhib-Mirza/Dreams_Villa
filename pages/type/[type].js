import axios from "axios";

export async function getServerSideProps(context) {
  const query = context.query.type;
  const resp = await axios.get(`http://localhost:4000/${query}`);
  return {
    props: {
        data: resp.data
    },
  };
}

const Type = ({data}) => {
  return (
  <>
  <h1>Hello World</h1>
  </>
  );
};

export default Type;
