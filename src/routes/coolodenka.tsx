import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/coolodenka")({
  component: CoolodenkaRedirect,
});

function CoolodenkaRedirect() {
  useEffect(() => {
    window.location.href = "https://pelykh.mmm.page/coolodenka";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border-2 border-white/20 shadow-xl">
        <div className="text-4xl mb-4">🔄</div>
        <p className="text-white text-xl font-semibold">Redirecting...</p>
      </div>
    </div>
  );
}
