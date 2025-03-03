const MessageModal = (props) => {
    return (
        <div className="message-menu" style={{display: props.showMenu ? "block" : "none"}}>
        <ul>
          <li>X delete message</li>
          <li><span className="pin-icon">V</span> pin message</li>
        </ul>
      </div>
    )
}

export default MessageModal;