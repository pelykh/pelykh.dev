import { createFileRoute } from "@tanstack/react-router";
import PixelFlower from "../components/PixelFlower";
import { Footer } from "../components/Footer";
import { BackgroundGrid } from "../components/BackgroundGrid";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <BackgroundGrid>
      <main className="grow flex flex-col items-center justify-center relative z-20 pb-20">
        <div className="relative group cursor-default">
          <h1 className="text-[15vw] md:text-[16vw] leading-none text-white tracking-tighter flex items-end select-none drop-shadow-2xl font-playfair italic font-normal">
            <span>
              <span className="text-yellow-400">[</span>a
              <span className="text-yellow-400">]</span>
            </span>
            <span>pelykh</span>
          </h1>

          <div className="absolute -top-8 left-4 md:left-12 text-xs md:text-sm font-bold tracking-widest text-white/60 opacity-0 animate-fade-in [animation-delay:1s]">
            FULL-STACK ENGINEER
          </div>

          <div className="absolute -bottom-20 right-4 md:right-12 text-xs md:text-sm font-bold tracking-widest text-white/60 opacity-0 animate-fade-in [animation-delay:1.5s]">
            BASED IN UKRAINE
          </div>
        </div>
      </main>

      <Footer />
    </BackgroundGrid>
  );
}
