import {
  FastForwardIcon,
  MoonIcon,
  ClockIcon,
  CodeIcon,
  LockOpenIcon,
  CubeTransparentIcon,
} from "@heroicons/react/outline";
import { Body } from "../Primitives/Body";
import { LargeTitle } from "../Primitives/LargeTitle";
import { HomeGridFeatureItem } from "./HomeGridFeatureItem";
import { HomeSection } from "./HomeSection";
import { useTranslation } from "~/i18n";

export function HomeFeatureGridSection() {
  const { t } = useTranslation();

  return (
    <HomeSection containerClassName="bg-black">
      <div className="flex flex-col px-4 pb-2 pt-6 md:py-12">
        <LargeTitle className="mb-4 text-slate-300">
          {t("home.features.title")}
        </LargeTitle>
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
          <HomeGridFeatureItem
            icon={FastForwardIcon}
            title={t("home.features.keyboard.title")}
            titleClassName="text-white"
          >
            <Body className="text-slate-400">
              {t("home.features.keyboard.description")}
            </Body>
          </HomeGridFeatureItem>

          <HomeGridFeatureItem
            icon={MoonIcon}
            title={t("home.features.darkMode.title")}
            titleClassName="text-white"
          >
            <Body className="text-slate-400">
              {t("home.features.darkMode.description")}
            </Body>
          </HomeGridFeatureItem>

          <HomeGridFeatureItem
            icon={ClockIcon}
            title={t("home.features.codeView.title")}
            titleClassName="text-white"
          >
            <Body className="text-slate-400">
              {t("home.features.codeView.description")}
            </Body>
          </HomeGridFeatureItem>
          <HomeGridFeatureItem
            icon={CubeTransparentIcon}
            title={t("home.features.schema.title")}
            titleClassName="text-white"
          >
            <Body className="text-slate-400">
              {t("home.features.schema.description")}
            </Body>
          </HomeGridFeatureItem>
          <HomeGridFeatureItem
            icon={CodeIcon}
            title={t("home.features.vsCode.title")}
            titleClassName="text-white"
          >
            <Body className="text-slate-400">
              {t("home.features.vsCode.description")}{" "}
              <a
                className="whitespace-nowrap text-lime-300 hover:text-lime-500"
                href="https://marketplace.visualstudio.com/items?itemName=JSONHero.jsonhero-vscode"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("home.features.vsCode.link")}
              </a>
              .
            </Body>
          </HomeGridFeatureItem>
          <HomeGridFeatureItem
            icon={LockOpenIcon}
            title={t("home.features.openSource.title")}
            titleClassName="text-white"
          >
            <Body className="text-slate-400">
              {t("home.features.openSource.description")}
            </Body>
          </HomeGridFeatureItem>
        </div>
      </div>
    </HomeSection>
  );
}
