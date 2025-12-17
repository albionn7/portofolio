import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <h1 className="text-2xl font-bold tracking-tight">
          A<span className="text-blue-400 text-4xl">M</span>
        </h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a
          href="https://github.com/albionn7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/_albionmazari/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/albion-nazari/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
