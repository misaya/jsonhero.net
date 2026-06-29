import { useState } from "react";
import { useNavigation } from "react-router-dom";
import { useTranslation } from "~/i18n";

export type UrlFormProps = {
  className?: string;
};

export function UrlForm({ className }: UrlFormProps) {
  const transition = useNavigation();
  const [inputValue, setInputValue] = useState("");
  const { t } = useTranslation();

  const isNotIdle = transition.state !== "idle";
  const isButtonDisabled = !inputValue.length || isNotIdle;

  return (
    <form
      method="post"
      action="/actions/createFromUrl"
      className={`${className}`}
    >
      <div className="flex">
        <input
          type="text"
          name="jsonUrl"
          id="jsonUrl"
          className="block min-w-0 flex-grow rounded-l-sm border border-white/10 bg-slate-950/70 px-3 py-2.5 text-base text-slate-100 transition duration-300 placeholder:text-slate-500 focus:border-lime-300 focus:ring-lime-300"
          placeholder={t("home.search.placeholder")}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          type="submit"
          value="Go"
          className={`inline-flex items-center justify-center rounded-r-sm border border-transparent bg-lime-300 px-4 py-2.5 font-black uppercase text-slate-950 transition hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-slate-950 ${
            isButtonDisabled && "disabled:opacity-50 disabled:hover:bg-lime-300"
          }`}
          disabled={isButtonDisabled}
        >
          {isNotIdle ? "..." : t("Go")}
        </button>
      </div>
    </form>
  );
}
