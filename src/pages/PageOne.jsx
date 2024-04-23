import Axios from "axios";
import { useQuery } from "react-query";

const PageOne = () => {
  const { data, isLoading, isError, refetch} = useQuery(["product"], () => {
    return Axios.get("http://127.0.0.1:8000/api-products/").then(
      (response) => response.data[7]
    );
  });

  if (isError) {
    return <h1>Field to fetch data sorry</h1>
  }
  if (isLoading) {
    return <h1>Loading......</h1>
  }
  return (
    <>
      <h1>page one <p>{data?.name}</p></h1>
      <button onClick={refetch}>update</button>
    </>
  );
};

export default PageOne;
