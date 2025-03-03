const Header = () => {
  return(
    <>
        <header>
              <div className="windows-icons">
                <span className="icon-close"></span>
                <span className="icon-minimize"></span>
                <span className="icon-maximize"></span>
              </div>
              <div className="header-container">
                <h2>Messages</h2>
                <img src="/send_message_icon.png" alt="send-message" height="20" width="20" className="send-message-btn" />
              </div>
            </header>
    </>
  )
}

export default Header;