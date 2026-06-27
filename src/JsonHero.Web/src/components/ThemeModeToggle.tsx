import { useHotkeys } from "react-hotkeys-hook";
import { MoonIcon } from "./Icons/MoonIcon";
import { SunIcon } from "./Icons/SunIcon";
import { useTheme } from "./ThemeProvider";
import { useTranslation } from "~/i18n";

export function ThemeModeToggler() {
  const [theme, setTheme] = useTheme();
  const { t } = useTranslation();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const SwitchIcon = theme === "light" ? MoonIcon : SunIcon;

  useHotkeys("alt+t", () => toggleTheme(), [toggleTheme]);

  return (
    <button
      className={`flex text-xl items-center px-2 py-1.5 transition ${
        theme === "light"
          ? "text-slate-800 hover:bg-slate-300"
          : "text-white hover:bg-slate-700"
      }`}
      onClick={toggleTheme}
      aria-label={t("Toggle theme")}
      title={t("Toggle theme")}
    >
      <SwitchIcon />
    </button>
  );
}
