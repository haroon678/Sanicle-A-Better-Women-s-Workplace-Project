const ChatComponent = () => {
    return (
      <>
        <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css" />
        <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
        <df-messenger
          location="us-central1"
          project-id="sanicle-state-sync"
          agent-id="927adda6-b4d4-4a0b-9c2d-12e8982b4bf7"
          language-code="en"
          max-query-length="-1"
        >
          <df-messenger-chat-bubble chat-title="Sanicle StateSync" chat-subtitle="HR BookAppoinment" chat-title-icon="logo.png"/>
        </df-messenger>
        <style>
          {`
            df-messenger {
              z-index: 999;
              position: fixed;
              --df-messenger-font-color: #000;
              --df-messenger-font-family: Google Sans;
              --df-messenger-chat-background: #DDDDDD;
              --df-messenger-message-user-background: #C8E6C9;
              --df-messenger-message-bot-background: #fff;
              bottom: 16px;
              right: 16px;
              --df-messenger-chat-window-height:430px;
            }
          `}
        </style>
      </>
    );
  };
  
  export default ChatComponent;
  