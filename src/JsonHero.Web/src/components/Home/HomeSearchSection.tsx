import { AutoplayVideo } from "../AutoplayVideo";
import { ExtraLargeTitle } from "../Primitives/ExtraLargeTitle";
import { SmallSubtitle } from "../Primitives/SmallSubtitle";
import { HomeSection } from "./HomeSection";
import { useTranslation } from "~/i18n";

import searchVideo from "~/assets/home/JsonHeroSearch.mp4";

export function HomeSearchSection() {
  const { t } = useTranslation();

  return (
    <HomeSection containerClassName="py-10 px-6 bg-black md:py-36 lg:py-20">
      <div className="w-full md:pr-10 md:w-1/2">
        <ExtraLargeTitle className="text-white mb-4">
          {t("home.search.title")}
        </ExtraLargeTitle>
        <SmallSubtitle className="mb-6 md:mb-10">
          {t("home.search.description")}
        </SmallSubtitle>
      </div>
      <div className="w-full md:w-1/2">
        <AutoplayVideo src={searchVideo} />
      </div>
    </HomeSection>
  );
}
