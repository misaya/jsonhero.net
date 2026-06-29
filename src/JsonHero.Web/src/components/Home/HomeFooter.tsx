import { Link } from "react-router-dom";
import { LanguageSelect } from "../LanguageSelect";
import { GithubIcon } from "../Icons/GithubIcon";
import { Logo } from "../Icons/Logo";
import { useTranslation } from "~/i18n";

export type HomeFooterProps = {
  maxWidth?: string;
};

export function HomeFooter({ maxWidth = "1150px" }: HomeFooterProps) {
  const { t } = useTranslation();

  return (
    <footer className="flex w-full flex-col items-center bg-slate-950 px-4 py-8 md:py-10">
      <div
        className="flex w-full items-center justify-between border-t border-white/10 pt-8"
        style={{ maxWidth: maxWidth }}
      >
        <div className="flex flex-grow items-start opacity-90">
          <Logo />
        </div>
        <ol className="flex ml-2 items-center gap-3">
          <li>
            <LanguageSelect variant="dark" />
          </li>
          <li className="text-white/70 transition hover:cursor-pointer hover:text-white">
            <Link to="/privacy">{t("home.footer.privacy")}</Link>
          </li>
          <li className="text-white/70 transition hover:cursor-pointer hover:text-white">
            <a
              href="https://github.com/misaya/jsonhero.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </li>
        </ol>
      </div>
    </footer>
  );
}
