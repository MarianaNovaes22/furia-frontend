import { useState } from "react";
import LogoFuriaTexto from "../../assets/imagens/furia-logo2.svg";

interface WelcomeScreenProps {
  onStartChat: (message?: string) => void;
}

const WelcomeScreen = ({ onStartChat }: WelcomeScreenProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onStartChat(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-white space-y-6">
      <img
        src={LogoFuriaTexto}
        alt="Logo Furia"
        className="w-32 md:w-40 drop-shadow-md opacity-90"
      />
      <h2 className="text-2xl md:text-4xl font-bold opacity-90">
        SÓ VEM. PERGUNTE O QUE QUISER.
      </h2>
      <p className="text-lg md:text-xl opacity-80">
        Selecione alguma das opções abaixo ou digite sua pergunta.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        {["Quem é o fundador da Fúria?", "Quantos títulos temos?", "Como fazer parte da torcida?"].map((question, i) => (
          <button
            key={i}
            onClick={() => onStartChat(question)}
            className="bg-gray-300 text-black hover:bg-gray-400 px-4 py-2 rounded shadow"
          >
            {question}
          </button>
        ))}
      </div>
      <div className="flex mt-4 w-full max-w-md px-4 gap-2">
        <input
          type="text"
          placeholder="Pergunte alguma coisa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 shadow-md"
        />
        <button
          onClick={handleSubmit}
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-full shadow-md"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
