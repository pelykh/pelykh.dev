import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/experiments/tanstack-form")({
	component: TanstackFormExperiment,
});

function TanstackFormExperiment() {
	const { t } = useTranslation();

	return (
		<div className="min-h-screen bg-white dark:bg-zinc-900 px-6 py-12 md:px-12 lg:px-24">
			<div className="max-w-4xl mx-auto">
				<Link
					to="/"
					className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 mb-8"
				>
					<ArrowLeft className="size-4" />
					{t("common.backToHome")}
				</Link>

				<h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
					TanStack Form
				</h1>

				<p className="text-zinc-500 dark:text-zinc-400">
					{t("experiments.tanstackFormPlaceholder")}
				</p>
			</div>
		</div>
	);
}
