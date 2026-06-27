import {
  languageLabels,
  languages,
  useLanguage,
  useTranslation,
  type Language,
} from "~/i18n";

export type LanguageSelectProps = {
  variant?: "dark" | "light";
};

export function LanguageSelect({ variant = "light" }: LanguageSelectProps) {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const classes =
    variant === "dark"
      ? "border-slate-700 bg-black text-white hover:border-slate-500"
      : "border-slate-400 bg-slate-100 text-slate-800 hover:border-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100";

  return (
    <label className="flex items-center gap-1 text-sm">
      <span className={variant === "dark" ? "text-white/70" : "sr-only"}>
        {t("Language")}
      </span>
      <select
        className={`h-[26px] rounded-sm border px-1 py-0 text-sm transition ${classes}`}
        value={language}
        aria-label={t("Language")}
        onChange={(event) => setLanguage(event.target.value as Language)}
      >
        {languages.map((value) => (
          <option key={value} value={value}>
            {languageLabels[value]}
          </option>
        ))}
      </select>
    </label>
  );
}
