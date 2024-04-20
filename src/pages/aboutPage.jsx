import { useContext } from "react";
import { AppContext } from "../main";
import ChangeProfile from "../components/changeProfile";

const AboutPage = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <div className="text-3xl font-mono">Profile user is : {username}</div>
    </div>
  );
};

export default AboutPage;
