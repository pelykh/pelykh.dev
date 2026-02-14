import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faPython,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";

const gridStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

export function BackgroundGrid({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0044CC] overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={gridStyle}
      ></div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] opacity-90 animate-float-medium [animation-delay:100ms]">
          <FontAwesomeIcon icon={faReact} className="text-5xl text-[#61DAFB]" />
        </div>

        <div className="absolute top-[8%] left-[25%] opacity-80 animate-float-slow [animation-delay:500ms]">
          <FontAwesomeIcon
            icon={faNodeJs}
            className="text-3xl text-[#68A063]"
          />
        </div>

        <div className="absolute top-[20%] right-[15%] opacity-85 animate-float-fast [animation-delay:300ms]">
          <FontAwesomeIcon icon={faJs} className="text-4xl text-[#F7DF1E]" />
        </div>

        <div className="absolute bottom-[20%] left-[8%] opacity-80 animate-float-slow [animation-delay:700ms]">
          <FontAwesomeIcon
            icon={faPython}
            className="text-3xl text-[#FFD43B]"
          />
        </div>

        <div className="absolute bottom-[25%] right-[20%] opacity-90 animate-float-medium [animation-delay:1000ms]">
          <FontAwesomeIcon
            icon={faTypescript}
            className="text-3xl text-[#3178C6]"
          />
        </div>

        <div className="absolute top-[40%] left-[10%] opacity-60 animate-float-slow">
          <FontAwesomeIcon icon={faReact} className="text-2xl text-[#61DAFB]" />
        </div>

        <div className="absolute top-[60%] right-[8%] opacity-70 animate-float-slow [animation-delay:200ms]">
          <FontAwesomeIcon icon={faJs} className="text-2xl text-[#F7DF1E]" />
        </div>
      </div>

      {children}
    </div>
  );
}
