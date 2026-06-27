import { AutoplayVideo } from "../AutoplayVideo";
import { ExtraLargeTitle } from "../Primitives/ExtraLargeTitle";
import { SmallSubtitle } from "../Primitives/SmallSubtitle";
import { HomeSection } from "./HomeSection";
import { useTranslation } from "~/i18n";

import shareVideo from "~/assets/home/JsonHeroShare.mp4";

export function HomeCollaborateSection() {
  const { t } = useTranslation();

  return (
    <HomeSection
      containerClassName="py-10 px-6 bg-black md:py-36 lg:py-20"
      reversed
    >
      <div className="w-full md:pl-10 md:w-1/2">
        <ExtraLargeTitle className="text-white mb-4">
          {t("home.collaborate.title")}
        </ExtraLargeTitle>
        <SmallSubtitle className="mb-6 md:mb-10">
          {t("home.collaborate.description")}
        </SmallSubtitle>
      </div>
      <div className="w-full md:w-1/2">
        <AutoplayVideo src={shareVideo} />
      </div>
    </HomeSection>
  );
}
