import React from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  // const ref = useRef();

  // useEffect(() => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // }, [message]);

  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://cdn.autopapo.com.br/box/uploads/2022/08/22135052/nissan-skyline-gtr-r34-paul-walker-leilao-732x488.png"
          alt=""
        />
        <span>agora mesmo</span>
      </div>
      <div className="messageContent">
        <p>coe</p>
        <img
          src="https://cdn.autopapo.com.br/box/uploads/2022/08/22135052/nissan-skyline-gtr-r34-paul-walker-leilao-732x488.png"
          alt=""
        />
      </div>
      {/* <div className="messageInfo"> */}
      {/* <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        /> */}
      {/* <span>message</span> */}
      {/* </div> */}
      {/* <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div> */}
    </div>
  );
};

export default Message;
