import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const languages = [
	{ code: "en", label: "EN" },
	{ code: "uk", label: "UK" },
] as const;

export function LanguageSwitcher() {
	const { i18n } = useTranslation();

	return (
		<div className="fixed top-4 right-4 z-50 flex items-center gap-1">
			<FontAwesomeIcon
				icon={faLanguage}
				className="text-white/60 text-lg"
			/>
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
