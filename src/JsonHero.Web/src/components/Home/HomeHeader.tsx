import { useTranslation } from "~/i18n";
import { Logo } from "../Icons/Logo";
import { LanguageSelect } from "../LanguageSelect";
import { NewDocument } from "../NewDocument";
import { GithubStarSmall } from "../UI/GithubStarSmall";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "../UI/Popover";

export function HomeHeader({ fixed }: { fixed?: boolean }) {
  const { t } = useTranslation();

  return (
    <header
      className={`${
        fixed ? "fixed" : ""
      } z-20 flex w-full justify-center border-b border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-xl`}
    >
      <div className="flex w-full max-w-[1180px] items-center justify-between gap-4">
        <div className="flex h-9 items-center justify-center">
          <div className="w-36 sm:w-44">
            <Logo />
          </div>
        </div>
        <nav className="hidden items-center gap-7 text-sm font-bold text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#inspector">
            {t("home.header.inspect")}
          </a>
          <a className="transition hover:text-white" href="#workflow">
            {t("home.header.workflow")}
          </a>
          <a className="transition hover:text-white" href="#features">
            {t("home.header.features")}
          </a>
        </nav>
        <ol className="flex items-center gap-2">
          <li className="hidden lg:block">
            <LanguageSelect variant="dark" />
          </li>
          <li className="hidden sm:block">
            <GithubStarSmall className="rounded-sm border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] dark:hover:bg-white/[0.08]" />
          </li>
          <Popover>
            <PopoverTrigger>
              <button className="inline-flex h-9 items-center justify-center rounded-sm bg-lime-300 px-4 text-sm font-black uppercase tracking-normal text-slate-950 shadow-[0_0_24px_rgba(190,242,100,0.18)] transition hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-slate-950">
                {t("home.header.openJson")}
              </button>
            </PopoverTrigger>
            <PopoverContent side="bottom" sideOffset={20}>
              <NewDocument />
              <PopoverArrow
                className="fill-current text-slate-900"
                offset={20}
              />
            </PopoverContent>
          </Popover>
        </ol>
      </div>
    </header>
  );
}
