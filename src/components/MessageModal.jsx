const MessageModal = (props) => {
    return (
        <div className="message-menu" style={{display: props.showMenu ? "block" : "none"}}>
        <ul>
          <li>Delete message</li>
          <li>Pin message</li>
        </ul>
      </div>
    )
}

export default MessageModal;