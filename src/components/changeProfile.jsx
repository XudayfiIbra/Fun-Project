import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../main";

const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setNewUsername] = useState("");
  return (
    <>
      <div>
        <input
          className="bg-blue-400"
          type="text"
          onChange={(event) => {
            setNewUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setUsername(newUsername);
          }}
        >
          Change username
        </button>
      </div>
    </>
  );
};

export default ChangeProfile;
