
import Search from "./Search";
import Message from "./Message";
import data from "../assets/data";
import Header from "./Header";

const ChatContainer = () => {
    return (
        <>
           <div className="chat-container">
            <Header />
            <Search />   
               {/* - loop through message data  */}
                {data.map((message, index) => {
                  return <Message key={index} name={message.name} message={message.message} color={message.color} borderColor={message.borderColor}/>
                
               })
            }
              
            </div>
        </>
     
    )

};

export default ChatContainer;