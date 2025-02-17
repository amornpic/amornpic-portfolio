import { Monitor, Moon, Sun } from 'lucide-react';
import { type ReactNode, useEffect, useMemo, useState } from 'react';

enum ThemeValue {
	Auto = 'system',
	Light = 'light',
	Dark = 'dark',
}

const THEME_LIST: Array<{ icon: ReactNode; value: ThemeValue }> = [
	{
		icon: <Monitor className="h-4 w-4" />,
		value: ThemeValue.Auto,
	},
	{
		icon: <Sun className="h-4 w-4" />,
		value: ThemeValue.Light,
	},
	{
		icon: <Moon className="h-4 w-4" />,
		value: ThemeValue.Dark,
	},
];

export function ModeToggle() {
	const [theme, setThemeState] = useState<ThemeValue>(ThemeValue.Auto);

	useEffect(() => {
		const isDarkMode = document.documentElement.classList.contains(
			ThemeValue.Dark,
		);
		setThemeState(isDarkMode ? ThemeValue.Dark : ThemeValue.Light);
	}, []);

	useEffect(() => {
		const isDark =
			theme === ThemeValue.Dark ||
			(theme === ThemeValue.Auto &&
				window.matchMedia(`(prefers-color-scheme: ${ThemeValue.Dark})`)
					.matches);

		document.documentElement.classList[isDark ? 'add' : 'remove'](
			ThemeValue.Dark,
		);
	}, [theme]);

	const themeSelectClasses = useMemo(() => {
		if (theme === ThemeValue.Dark) {
			return 'left-[58px]';
		}
		if (theme === ThemeValue.Light) {
			return 'left-[30px]';
		}

		return 'left-0.5';
	}, [theme]);

	return (
		<div
			className="dark:bg-zinc-600 bg-zinc-200 relative flex items-center rounded-full p-0.5"
			role="radiogroup"
		>
			<div
				className={`bg-zinc-800 transition absolute top-0.5 h-7 w-7 rounded-full ${themeSelectClasses}`}
			/>
			{THEME_LIST.map((item) => (
				<div
					className={`relative inline-flex h-7 w-7 cursor-pointer items-center justify-center transition-colors ${item.value === theme ? 'text-white' : 'text-zinc-400 hover:text-zinc-300'}`}
					key={item.value}
					onClick={() => setThemeState(item.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							setThemeState(item.value);
						}
					}}
					aria-label={item.value}
					aria-checked={item.value === theme}
				>
					{item.icon}
				</div>
			))}
		</div>
	);
}
