import { useCallback, useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

function getStoredTheme(): Theme {
	const stored = localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "system") {
		return stored;
	}
	return "system";
}

function applyTheme(theme: Theme) {
	const isDark =
		theme === "dark" ||
		(theme === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches);

	document.documentElement.classList.toggle("dark", isDark);
}

export function useTheme() {
	const [theme, setThemeState] = useState<Theme>(getStoredTheme);

	const setTheme = useCallback((newTheme: Theme) => {
		localStorage.setItem("theme", newTheme);
		setThemeState(newTheme);
		applyTheme(newTheme);
	}, []);

	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	useEffect(() => {
		if (theme !== "system") return;

		const mql = window.matchMedia("(prefers-color-scheme: dark)");
		const handler = () => applyTheme("system");
		mql.addEventListener("change", handler);
		return () => mql.removeEventListener("change", handler);
	}, [theme]);

	return { theme, setTheme } as const;
}
