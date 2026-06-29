import {
  CodeIcon,
  CubeTransparentIcon,
  FastForwardIcon,
  LinkIcon,
  LockOpenIcon,
  MoonIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useTranslation } from "~/i18n";
import { Body } from "../Primitives/Body";
import { LargeTitle } from "../Primitives/LargeTitle";
import { HomeGridFeatureItem } from "./HomeGridFeatureItem";

const featureItems = [
  {
    icon: SearchIcon,
    title: "home.features.fuzzySearch.title",
    body: "home.features.fuzzySearch.description",
  },
  {
    icon: FastForwardIcon,
    title: "home.features.keyboard.title",
    body: "home.features.keyboard.description",
  },
  {
    icon: CubeTransparentIcon,
    title: "home.features.schema.title",
    body: "home.features.schema.description",
  },
  {
    icon: LinkIcon,
    title: "home.features.deepLinks.title",
    body: "home.features.deepLinks.description",
  },
  {
    icon: MoonIcon,
    title: "home.features.darkMode.title",
    body: "home.features.darkMode.description",
  },
  {
    icon: LockOpenIcon,
    title: "home.features.openSource.title",
    body: "home.features.openSource.description",
  },
];

export function HomeFeatureGridSection() {
  const { t } = useTranslation();

  return (
    <section
      className="border-b border-white/10 bg-slate-950 px-4 py-16 md:py-24"
      id="features"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-normal text-lime-200">
              {t("home.features.eyebrow")}
            </p>
            <LargeTitle className="text-5xl leading-tight text-white">
              {t("home.features.title")}
            </LargeTitle>
          </div>
          <Body className="text-lg leading-7 text-slate-400">
            {t("home.features.description")}
          </Body>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((feature) => (
            <HomeGridFeatureItem
              icon={feature.icon}
              key={feature.title}
              title={t(feature.title)}
              titleClassName="text-white"
            >
              <Body className="mt-2 leading-6 text-slate-400">
                {t(feature.body)}
              </Body>
            </HomeGridFeatureItem>
          ))}
          <div className="rounded-sm border border-lime-300/20 bg-lime-300/10 p-6 lg:col-span-3">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="mb-2 text-2xl font-black text-white">
                  {t("home.features.vsCode.title")}
                </h3>
                <p className="max-w-2xl text-base leading-7 text-slate-300">
                  {t("home.features.vsCode.description")}
                </p>
              </div>
              <a
                className="inline-flex h-10 items-center justify-center gap-2 rounded-sm border border-white/10 bg-slate-950 px-4 text-sm font-black uppercase text-lime-200 transition hover:border-lime-300/50 hover:text-lime-100"
                href="https://marketplace.visualstudio.com/items?itemName=JSONHero.jsonhero-vscode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CodeIcon className="h-5 w-5" />
                {t("home.features.vsCode.link")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
