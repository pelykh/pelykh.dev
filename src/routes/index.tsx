import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-white/10 rounded-full top-[10%] left-[10%] animate-float" />
        <div className="absolute w-48 h-48 bg-white/10 rounded-full top-[60%] right-[10%] animate-float-delayed" />
        <div className="absolute w-36 h-36 bg-white/10 rounded-full bottom-[20%] left-[20%] animate-float-delayed-2" />
      </div>

      {/* Main content */}
      <div className="relative text-center p-12 bg-white/10 backdrop-blur-lg rounded-3xl border-2 border-white/20 shadow-2xl max-w-2xl mx-4 animate-fade-in-scale">
        {/* WIP Badge */}
        <div className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 ">
          🚧 Work in Progress 🚧
        </div>

        {/* Emoji */}
        <div className="text-4xl mb-4 inline-block ">🛠️</div>

        {/* Title */}
        <h1 className="text-white text-6xl font-bold mb-4 drop-shadow-lg">
          pelykh.dev
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 text-xl leading-relaxed mb-8">
          Building something cool with AI
          <br />
          Experimenting • Creating • Evolving
        </p>

        <a
          href="https://github.com/pelykh/pelykh.dev/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 text-white rounded-full font-semibold text-base border-2 border-white/30 transition-all duration-300 hover:bg-white/30 hover:border-white/50 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          View on GitHub
        </a>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-30px) translateX(30px);
          }
          66% {
            transform: translateY(30px) translateX(-30px);
          }
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 20s ease-in-out infinite 2s;
        }

        .animate-float-delayed-2 {
          animation: float 20s ease-in-out infinite 4s;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s ease-out;
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
