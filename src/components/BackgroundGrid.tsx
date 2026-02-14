import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faPython,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";

function ClaudeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.709 15.955l4.72-2.756.08-.046 2.698-1.575c.062-.036.062-.127 0-.16341L9.51 9.84l-.08-.047-4.7-2.745a.08.08 0 0 0-.12.07v2.077c0 .03.016.057.042.071l2.83 1.652a.082.082 0 0 1 0 .142l-2.83 1.652a.082.082 0 0 0-.041.071v2.102a.08.08 0 0 0 .12.07h-.001z" />
      <path d="M19.291 8.045l-4.72 2.756-.08.046-2.698 1.575c-.062.036-.062.127 0 .163l2.697 1.575.08.047 4.7 2.745a.08.08 0 0 0 .121-.07v-2.077a.082.082 0 0 0-.042-.071l-2.83-1.652a.082.082 0 0 1 0-.142l2.83-1.652a.082.082 0 0 0 .042-.071V8.115a.08.08 0 0 0-.121-.07h.001z" />
      <path d="M14.504 6.09l-2.378-1.388a.164.164 0 0 0-.163 0L9.585 5.99a.082.082 0 0 0 0 .142l4.838 2.825a.082.082 0 0 0 .122-.071V6.162a.082.082 0 0 0-.04-.071z" />
      <path d="M9.496 17.91l2.378 1.388a.164.164 0 0 0 .163 0l2.378-1.388a.082.082 0 0 0 0-.142l-4.838-2.825a.082.082 0 0 0-.122.071v2.825a.082.082 0 0 0 .04.071z" />
    </svg>
  );
}

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
          <ClaudeIcon className="w-8 h-8 text-[#D97757]" />
        </div>
      </div>

      {children}
    </div>
  );
}
