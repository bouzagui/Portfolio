import Logo from "../assets/logo.png";
import Resume from "../assets/Resume.pdf";

export default function Navbar() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="flex justify-between items-center p-6 bg-white shadow-md m-6 text-gray-500 font-semibold ml-24 mr-24">
      <div className="flex items-center space-x-4 w-12 h-12">
        <img src={Logo} alt="Logo" className="h-12 rounded-full" />
        <h1 className="text-[20px] font-extralight">Bouzagui</h1>
      </div>
      <nav className="space-x-6">
        <a href="#about" className="hover:text-blue-500 relative group">
          <span>About</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all ease-in-out duration-300"></span>
        </a>
        <a href="#projects" className="hover:text-blue-500 relative group">
          <span>Projects</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all ease-in-out duration-300"></span>
        </a>
        <a href="#contact" className="hover:text-blue-500 relative group">
          <span>Contact</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all ease-in-out duration-300"></span>
        </a>
        <a href={Resume} download target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 relative group">
          <span>Resume</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all ease-in-out duration-300"></span>
        </a>
      </nav>
      <button
        onClick={toggleDark}
        className="flex items-center w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition"
      >
        <div className="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform dark:translate-x-6"></div>
      </button>
    </div>
  );
}
