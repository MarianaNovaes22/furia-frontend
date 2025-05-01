const BASE_URL = import.meta.env.VITE_API_URL || "https://furia-backend-qb4q.onrender.com/chat";

export const sendMessageToBot = async (mensagem: string, modoTorcida: boolean = false): Promise<string> => {
  try {
    const response = await fetch(`${BASE_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mensagem, modoTorcida }), 
    });

    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error("Erro ao se comunicar com o bot:", error);
    return "Desculpe, houve um erro ao tentar responder.";
  }
};
