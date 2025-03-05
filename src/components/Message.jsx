
/* Displays individual message */
import { useState } from "react";
import MessageModal from "./MessageModal";

const Message = (props) => {
  //set state to show/hide menu
  const [showMenu, setShowMenu] = useState(false);
 

  return (
    <>
     <div className="message-container">
        <div className="color-thumbnail" style={{backgroundColor: props.color, borderColor: props.borderColor}}>
        </div>
        <div className="text-container">
          <h3>{props.name}</h3>
          <p>{props.message}</p>
        </div>
        <div className="menu-icon" onClick={() => setShowMenu(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Modal to delete or pin message  */}
        <MessageModal showMenu={showMenu}/>
  
       
     </div>
  
    </>
  )
}

export default Message;