import { Body } from "../Primitives/Body";
import { GithubStar } from "../UI/GithubStar";
import { useTranslation } from "~/i18n";

export function GithubBanner() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center w-full h-14 bg-indigo-600">
      <div className="flex items-center">
        <Body className="mr-3 text-xl text-white">
          {t("Star us on GitHub 👉")}
        </Body>
        <GithubStar />
      </div>
    </div>
  );
}
