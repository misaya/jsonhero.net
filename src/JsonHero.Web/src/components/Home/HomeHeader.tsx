import { Logo } from "../Icons/Logo";
import { NewDocument } from "../NewDocument";
import { GithubStar } from "../UI/GithubStar";
import { useTranslation } from "~/i18n";
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
      } z-20 flex h-12 justify-center  bg-indigo-700 flex-col`}
    >
      <div className="flex items-center justify-between w-screen px-4">
        <div className="flex gap-1 sm:gap-1.5 h-8 justify-center items-center">
          <div className="w-36 sm:w-44">
            <Logo />
          </div>
        </div>
        <ol className="flex items-center gap-2 sm:pr-4">
          <Popover>
            <PopoverTrigger>
              <button className=" bg-lime-400 text-slate-900 text-lg font-bold px-2 py-0.5 rounded uppercase whitespace-nowrap cursor-pointer opacity-90 hover:opacity-100 transition">
                {t("Try now")}
              </button>
            </PopoverTrigger>
            <PopoverContent side="bottom" sideOffset={30}>
              <NewDocument />
              <PopoverArrow
                className="fill-current text-indigo-700"
                offset={20}
              />
            </PopoverContent>
          </Popover>

          <li className="hover:cursor-pointer hidden sm:block">
            <GithubStar />
          </li>
        </ol>
      </div>
    </header>
  );
}
