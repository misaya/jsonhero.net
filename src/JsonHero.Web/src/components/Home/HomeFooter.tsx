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
    <footer className="flex flex-col items-center w-full px-4 py-6 bg-black md:py-10">
      <div
        className="flex items-center justify-between w-full border-t-[1px] pt-9 border-slate-800"
        style={{ maxWidth: maxWidth }}
      >
        <div className="flex flex-grow items-start">
          <Logo />
        </div>
        <ol className="flex ml-2 items-center gap-3">
          <li>
            <LanguageSelect variant="dark" />
          </li>
          <li className="mr-2 hover:cursor-pointer text-white/70 hover:text-white transition">
            <Link to="/privacy">{t("home.footer.privacy")}</Link>
          </li>
          <li className="hover:cursor-pointer">
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
