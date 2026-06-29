import { useState } from "react";
import {
  languageLabels,
  languages,
  useLanguage,
  useTranslation,
  type Language,
} from "~/i18n";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "./UI/Popover";

export type LanguageSelectProps = {
  variant?: "dark" | "light";
};

export function LanguageSelect({ variant = "light" }: LanguageSelectProps) {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const triggerClasses =
    variant === "dark"
      ? "bg-slate-900 text-white bg-opacity-90 hover:bg-opacity-100"
      : "bg-slate-200 text-slate-800 bg-opacity-90 hover:bg-opacity-100";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <button
          className={`flex items-center justify-center py-1 text-base font-bold px-2 rounded uppercase hover:cursor-pointer transition whitespace-nowrap ${triggerClasses}`}
          type="button"
          aria-label={t("Language")}
        >
          <span className="mr-1" aria-hidden="true">
            🌐
          </span>
          {languageLabels[language]}
        </button>
      </PopoverTrigger>
      <PopoverContent side="bottom" sideOffset={8}>
        <div className="bg-indigo-700 text-white rounded-sm shadow-md min-w-[150px] p-1.5 transition dark:bg-slate-800">
          {languages.map((value: Language) => {
            const isSelected = value === language;

            return (
              <button
                key={value}
                className={`flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left text-sm font-bold transition hover:bg-indigo-900 hover:text-white dark:hover:bg-slate-700 ${
                  isSelected
                    ? "bg-indigo-900 text-white dark:bg-slate-700"
                    : "text-slate-200"
                }`}
                type="button"
                onClick={() => {
                  setLanguage(value);
                  setOpen(false);
                }}
              >
                <span>{languageLabels[value]}</span>
                {isSelected && (
                  <span className="text-lime-300" aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <PopoverArrow className="fill-current text-indigo-700 dark:text-slate-800" />
      </PopoverContent>
    </Popover>
  );
}
