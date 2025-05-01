import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import ConversationScreen from "./ConversationScreen";
import { sendMessageToBot } from "../../sevices/openai";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatArea = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [hasStartedChat, setHasStartedChat] = useState(false);

  const handleSendMessage = async (message: string) => {
    const newUserMessage: Message = { role: "user", content: message };
    setMessages((prev) => [...prev, newUserMessage]);

    setHasStartedChat(true); // Inicia o chat

    const botReply = await sendMessageToBot(message);
    const newBotMessage: Message = { role: "assistant", content: botReply };
    setMessages((prev) => [...prev, newBotMessage]);
  };

  const handleStartChat = async (message?: string) => {
    setHasStartedChat(true);
    if (message) {
      await handleSendMessage(message);
    }
  };


  return (
    <div className="flex-1 bg-black/50 h-full">
      {hasStartedChat ? (
        <ConversationScreen
          messages={messages}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <WelcomeScreen onStartChat={handleStartChat} />
      )}
    </div>
  );
};

export default ChatArea;
