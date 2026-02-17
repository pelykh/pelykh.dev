import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { BackgroundGrid } from "../components/BackgroundGrid";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const { t } = useTranslation();
	const experimentsSectionRef = useRef<HTMLElement>(null);

	const scrollToExperiments = () => {
		experimentsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
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
							{t("home.subtitle1")}
						</div>

						<div className="absolute -bottom-20 right-4 md:right-12 text-xs md:text-sm font-bold tracking-widest text-white/60 opacity-0 animate-fade-in [animation-delay:1.5s]">
							{t("home.subtitle2")}
						</div>
					</div>
				</main>

				<Footer onScrollDown={scrollToExperiments} />
			</BackgroundGrid>

			<section
				ref={experimentsSectionRef}
				className="bg-white dark:bg-zinc-900 px-6 py-20 md:px-12 lg:px-24"
			>
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-12">
						{t("experiments.title")}
					</h2>

					<div className="grid gap-6">
						<Link
							to="/experiments/tanstack-form"
							className="group flex items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 p-6 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-lg"
						>
							<div>
								<div className="flex items-center gap-3 mb-1">
									<h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
										TanStack Form
									</h3>
									<span className="text-xs text-zinc-400 dark:text-zinc-500">
										Feb 17, 2025
									</span>
								</div>
								<p className="text-sm text-zinc-500 dark:text-zinc-400">
									{t("experiments.tanstackFormDescription")}
								</p>
							</div>
							<ArrowRight className="size-5 text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-zinc-900 dark:group-hover:text-white" />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
