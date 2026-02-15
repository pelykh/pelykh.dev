import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

const languages = [
	{ code: "en", label: "EN" },
	{ code: "uk", label: "UK" },
] as const;

export function LanguageSwitcher() {
	const { i18n } = useTranslation();

	return (
		<div className="flex items-center gap-1">
			<Languages size={16} className="text-white/60" />
			{languages.map((lang) => (
				<button
					key={lang.code}
					type="button"
					onClick={() => i18n.changeLanguage(lang.code)}
					className={`px-2 py-1 text-xs font-bold tracking-wider rounded transition-colors ${
						i18n.resolvedLanguage === lang.code
							? "bg-white/20 text-white"
							: "text-white/60 hover:text-white hover:bg-white/10"
					}`}
				>
					{lang.label}
				</button>
			))}
		</div>
	);
}
