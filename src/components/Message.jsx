
/* Displays individual message */

const Message = (props) => {
  return (
    <>
     <div className="message-container">
        <div className="color-thumbnail">

        </div>
        <div className="text-container">
          <h3>{props.name}</h3>
          <p>{props.message}</p>
        </div>
       
     </div>
    </>
  )
}

export default Message;