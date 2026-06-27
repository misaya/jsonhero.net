import { formatStarCount } from "~/utilities/formatStarCount";
import { GithubIconSimple } from "../Icons/GithubIconSimple";
import { Body } from "../Primitives/Body";
import { useStarCount } from "../StarCountProvider";
import { useTranslation } from "~/i18n";

export type GithubStarSmallProps = {
  className?: string;
};

export function GithubStarSmall({ className }: GithubStarSmallProps) {
  const starCount = useStarCount();
  const { t } = useTranslation();

  return (
    <a
      href="https://github.com/misaya/jsonhero.net"
      target="_blank"
      rel="noopener noreferrer"
      className="flex p-1 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition hover:cursor-pointer"
    >
      <div className="flex items-center gap-1.5 pl-1 rounded-l-sm">
        <GithubIconSimple className="w-4 h-4 ml-1 text-slate-700 dark:text-white transition"></GithubIconSimple>
        <Body className="font-semibold text-slate-800 dark:text-slate-100">
          {t("Star")}
        </Body>
      </div>
      {starCount && (
        <div className="pr-2 pl-1">
          <Body className="font-bold dark:text-slate-100">
            {formatStarCount(starCount)}
          </Body>
        </div>
      )}
    </a>
  );
}
