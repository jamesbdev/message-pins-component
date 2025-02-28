
import Search from "./Search";
import Message from "./Message";
import data from "../assets/data";



const ChatContainer = () => {
    return (
        <>
           <div className="chat-container">
            <div className="windows-icons">
              <span className="icon-close"></span>
              <span className="icon-minimize"></span>
              <span className="icon-maximize"></span>
            </div>
            <header>
              <div className="header-container">
                <h2>Messages</h2>
                <img src="/send_message_icon.png" alt="send-message" height="20" width="20" className="send-message-btn" />
              </div>
            </header>
            <Search />   
               {/* - loop through message data  */}
                {data.map((message, index) => {
                  return <Message key={index} name={message.name} message={message.message} color="blue"/>
                
               })
            }
              
            </div>
        </>
     
    )

};

export default ChatContainer;