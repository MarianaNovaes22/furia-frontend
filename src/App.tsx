import { useEffect } from "react";
import { Element, Events, scroller } from "react-scroll";
import Landing from "./components/Landing";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    // Configurar os eventos do react-scroll
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    
    // Função para detectar scroll do mouse e aplicar scroll automático
    const handleWheel = (event: WheelEvent) => {
      // Obter informações sobre a posição na página
      const landing = document.getElementById("landing-section");
      const chatbot = document.getElementById("chatbot-section");
      
      if (!landing || !chatbot) return;
      
      const landingRect = landing.getBoundingClientRect();
      
      // Verificar se estamos na seção landing (pelo menos metade dela visível)
      const isInLanding = landingRect.top > -window.innerHeight/2 && landingRect.top <= 0;
      
      // Se estamos na landing e rolando para baixo, ir para o chatbot
      if (isInLanding && event.deltaY > 0) {
        event.preventDefault();
        scroller.scrollTo("chatbot", {
          duration: 800,
          smooth: true
        });
      }
    };
    
    // Adicionar o listener de evento de wheel com passive: false para permitir preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      // Limpar eventos
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  
  return (
    <div className="flex flex-col">
      <Element name="landing" id="landing-section" className="h-screen relative">
        <Landing />
      </Element>
      
      <Element name="chatbot" id="chatbot-section" className="h-screen flex justify-center items-center bg-gray-800 relative">
        <Chatbot />
      </Element>
      
      <Element name="footer" id="footer-section" className="h-screen flex justify-center items-center bg-black text-white">
        <Footer />
      </Element>
    </div>
  );
};

export default App;