import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-20 px-6 py-6 flex items-center justify-between text-white/60 text-xs tracking-wider">
      <span>© {new Date().getFullYear()} pelykh.dev</span>

      <span className="text-lg animate-bounce">In progress</span>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/pelykh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="text-3xl" />
        </a>
      </div>
    </footer>
  );
};
