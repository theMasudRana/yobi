import React from "react";
import { ChatWidget } from "@papercups-io/chat-widget";
import usePrevAns from "../hooks/prevAns";
import { useStateValue } from "../context/Provider";
import { actions } from "../constant/actions";

function ChatWidgets() {
  const { usePrevAnsData } = usePrevAns();
  const { mutate: getPrevAns, isLoading } = usePrevAnsData();
  const [{ prevAns }, dispatch] = useStateValue();

  const chatLoaded = () => {
    console.log("Chat loaded!");
  };
  const chatOpened = () => {
    console.log("Chat opened!");
  };

  const chatClosed = () => {
    console.log("Chat closed!");
  };

  const sentMessage = (message) => {
    console.log("Message sent!", message);
    const data = {
      tenant_ids: [21426, 21427],
      search_word: message?.body,
    };
    dispatch({
      type: actions.SET_QUESTION,
      payload: message?.body,
    });
    getPrevAns(data);
  };

  const recivedMessage = (m) => {
    console.log("Message received!", m);
  };

  return (
    <div>
      <ChatWidget
        token={"00e45b5c-243e-47a5-880a-ca72ce517e73"}
        inbox={"5d624a94-84c4-40e2-8b17-e0c91df0f609"}
        title={"Welcome to Regal Dev Medical Group"}
        subtitle={"Please call 911 for all emergency medical needs"}
        primaryColor={"#0693e3"}
        newMessagePlaceholder={"Start typing..."}
        showAgentAvailability={false}
        agentAvailableText={"We're online right now!"}
        agentUnavailableText={"We're away at the moment."}
        requireEmailUpfront={true}
        iconVariant={"outlined"}
        greeting={
          "This conversation is being led by an AI Assistant, with human intervention capabiltiies. If you are experiencing a medical emergency, please call 911."
        }
        baseUrl={"https://chat-widget.yib.io"}
        iframeUrlOverride={"https://chat-widget-demo.yib.io/"}
        onChatLoaded={chatLoaded}
        onChatOpened={chatOpened}
        onChatClosed={chatClosed}
        onMessageSent={sentMessage}
        onMessageReceived={recivedMessage}
      />
    </div>
  );
}

export default ChatWidgets;
