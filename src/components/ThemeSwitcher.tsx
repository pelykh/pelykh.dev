import { faDesktop, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../hooks/useTheme";

const themes = [
	{ value: "system", icon: faDesktop },
	{ value: "light", icon: faSun },
	{ value: "dark", icon: faMoon },
] as const;

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	return (
		<div className="flex items-center gap-1">
			{themes.map((t) => (
				<button
					key={t.value}
					type="button"
					onClick={() => setTheme(t.value)}
					className={`px-2 py-1 rounded transition-colors ${
						theme === t.value
							? "bg-white/20 text-white"
							: "text-white/60 hover:text-white hover:bg-white/10"
					}`}
				>
					<FontAwesomeIcon icon={t.icon} className="text-xs" />
				</button>
			))}
		</div>
	);
}
