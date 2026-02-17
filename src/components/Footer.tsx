import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

interface FooterProps {
	onScrollDown?: () => void;
}

export const Footer = ({ onScrollDown }: FooterProps) => {
	const { t } = useTranslation();

	return (
		<footer className="absolute bottom-0 left-0 right-0 z-20 px-6 py-6 flex items-center justify-between text-white/60 text-xs tracking-wider">
			<span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>

			<button
				type="button"
				onClick={onScrollDown}
				className="animate-bounce cursor-pointer hover:text-white transition-colors duration-300"
				aria-label={t("footer.scrollDown")}
			>
				<ChevronDown className="size-8" />
			</button>
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
