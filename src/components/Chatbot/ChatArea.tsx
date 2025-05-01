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
  const [modoTorcida, setModoTorcida] = useState(false);

  const handleSendMessage = async (message: string) => {
    console.log("Modo Torcida ATUAL:", modoTorcida); // debug
  
    const newUserMessage: Message = { role: "user", content: message };
    setMessages((prev) => [...prev, newUserMessage]);
  
    setHasStartedChat(true);
  
    const botReply = await sendMessageToBot(message, modoTorcida);
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
    <div className="flex flex-col h-full bg-black/50">
      <div className="p-4 flex justify-end">
      <button
  onClick={() => {
    const novoModo = !modoTorcida;
    setModoTorcida(novoModo);
  }}
  className={`px-4 py-2 rounded-xl text-white font-bold transition ${
    modoTorcida ? "bg-yellow-500 hover:bg-yellow-400" : "bg-gray-700 hover:bg-gray-600"
  }`}
>
  🥳 Modo Torcida {modoTorcida ? "Ativo" : "Inativo"}
</button>

      </div>

      <div className="flex-1 overflow-hidden">
        {hasStartedChat ? (
          <ConversationScreen
            messages={messages}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <WelcomeScreen onStartChat={handleStartChat} />
        )}
      </div>
    </div>
  );
};

export default ChatArea;
