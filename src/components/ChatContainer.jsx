
import Search from "./Search";
import Message from "./Message";
import data from "../assets/data";
import Header from "./Header";
import { useState } from "react";
import PropTypes from "prop-types";

const ChatContainer = () => {
    //declare state of input value 
    const [searchValue, setSearchValue] = useState("");

    const filteredData = data.filter(message => 
        message.name.toLowerCase().includes(searchValue.toLowerCase()) || message.message.toLowerCase().includes(searchValue.toLowerCase())
    );

   
    return (
        <>
           <div className="chat-container">
            <Header />
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />   
               {/* - loop through message data  */}
                {filteredData.map((message, index) => {
                  return <Message key={index} name={message.name} 
                  message={message.message} 
                  color={message.color} 
                  borderColor={message.borderColor}
                  />
                
               })
            }
              
            </div>
        </>
     
    )

};

ChatContainer.prototypes = {
    setSearchValue: PropTypes.string.isRequired,

}
export default ChatContainer;