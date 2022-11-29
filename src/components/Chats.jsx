// import { doc, onSnapshot } from "firebase/firestore";
import React from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
// import { db } from "../firebase";

const Chats = () => {
  // const [chats, setChats] = useState([]);

  // const { currentUser } = useContext(AuthContext);
  // const { dispatch } = useContext(ChatContext);

  // useEffect(() => {
  // const getChats = () => {
  // const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
  //   setChats(doc.data());
  // });

  // return () => {
  //   unsub();
  // };
  // };

  //   currentUser.uid && getChats();
  // }, [currentUser.uid]);

  // const handleSelect = (u) => {
  //   dispatch({ type: "CHANGE_USER", payload: u });
  // };

  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://cdn.autopapo.com.br/box/uploads/2022/08/22135052/nissan-skyline-gtr-r34-paul-walker-leilao-732x488.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>PAPAPAPAPAPAPAPAAAAAABWAAAAAAAAA</span>
          <p>HELLO HOW ARE U</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
