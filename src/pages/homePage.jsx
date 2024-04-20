import { useContext } from "react";
import { AppContext } from "../main";
const HomePage = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1 className="text-3xl font-mono">Home page this is: {username}</h1>
    </div>
  );
};

export default HomePage;
