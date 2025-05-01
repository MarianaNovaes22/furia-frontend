import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-10 text-center text-sm text-gray-400 bg-transparent">
      <p>© {currentYear} Mariana Novaes. Todos os direitos reservados.</p>

      <div className="flex justify-center items-center gap-4 mt-4">
        <a
          href="https://www.linkedin.com/in/mariananovaes22/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/MarianaNovaes22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 transition-colors"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}
