import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="absolute bottom-0 left-0 right-0 z-20 px-6 py-6 flex items-center justify-between text-white/60 text-xs tracking-wider">
			<span>
				{t("footer.copyright", { year: new Date().getFullYear() })}
			</span>

			<span className="text-lg animate-bounce">
				{t("footer.inProgress")}
			</span>
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
