interface SidebarProps {
  closeSidebar?: () => void;
  onResetChat?: () => void;
}

const Sidebar = ({ closeSidebar, onResetChat }: SidebarProps) => {
  const handleClick = (label: string) => {
    if (label === "Reiniciar" && onResetChat) {
      onResetChat(); 
    }
    if (closeSidebar) closeSidebar(); 
  };

  return (
    <div className="w-64 bg-black/70 text-white h-full flex flex-col p-4">
      <div className="w-60 bg-[#121212] h-full p-4 flex flex-col gap-4 text-sm font-bold">
        <input
          type="text"
          placeholder="Pesquisar"
          className="bg-gray-500 text-white placeholder-white/60 px-4 py-2 rounded-full opacity-30 cursor-not-allowed"
          disabled
        />
        {["Reiniciar"].map((label, i) => (
          <button
            key={i}
            onClick={() => handleClick(label)}
            className="bg-gray-300 hover:bg-gray-400 text-black rounded-full py-2 px-4 text-left shadow"
          >
            {label.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
