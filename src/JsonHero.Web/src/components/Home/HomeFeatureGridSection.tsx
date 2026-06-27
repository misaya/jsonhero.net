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
          {t("And lots more features…")}
        </LargeTitle>
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
          <HomeGridFeatureItem
            icon={FastForwardIcon}
            title={t("Keyboard shortcuts")}
            titleClassName="text-white"
          >
            <Body className="text-slate-400">
              {t("Move as fast as you can think… after 3 coffees")}
            </Body>
          </HomeGridFeatureItem>

          <HomeGridFeatureItem
            icon={MoonIcon}
            title={t("Dark mode")}
            titleClassName="text-white"
          >
            <Body className="text-slate-400">
              {t("Of course, we’re not animals.")}
            </Body>
          </HomeGridFeatureItem>

          <HomeGridFeatureItem
            icon={ClockIcon}
            title={t("Code view")}
            titleClassName="text-white"
          >
            <Body className="text-slate-400">
              {t("Easily switch to the code view, so you can appear hardcore.")}
            </Body>
          </HomeGridFeatureItem>
          <HomeGridFeatureItem
            icon={CubeTransparentIcon}
            title={t("Auto JSON Schema")}
            titleClassName="text-white"
          >
            <Body className="text-slate-400">
              {t(
                "Automatically generates JSON Schema (draft 2020-12) from your JSON."
              )}
            </Body>
          </HomeGridFeatureItem>
          <HomeGridFeatureItem
            icon={CodeIcon}
            title={t("VS Code plugin")}
            titleClassName="text-white"
          >
            <Body className="text-slate-400">
              {t(
                "The inherited VS Code extension belongs to the upstream project. JsonHero.NET is not affiliated with that extension."
              )}{" "}
              <a
                className="whitespace-nowrap text-lime-300 hover:text-lime-500"
                href="https://marketplace.visualstudio.com/items?itemName=JSONHero.jsonhero-vscode"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Get it here")}
              </a>
              .
            </Body>
          </HomeGridFeatureItem>
          <HomeGridFeatureItem
            icon={LockOpenIcon}
            title={t("100% open source")}
            titleClassName="text-white"
          >
            <Body className="text-slate-400">
              {t(
                "Run JsonHero.NET yourself or fork the current repository on GitHub."
              )}
            </Body>
          </HomeGridFeatureItem>
        </div>
      </div>
    </HomeSection>
  );
}
