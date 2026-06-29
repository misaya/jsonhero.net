import { useTranslation } from "~/i18n";
import { AutoplayVideo } from "../AutoplayVideo";

import edgeCasesVideo from "~/assets/home/UncoverEdgeCases.mp4";
import searchVideo from "~/assets/home/JsonHeroSearch.mp4";
import shareVideo from "~/assets/home/JsonHeroShare.mp4";

const workflowItems = [
  {
    eyebrow: "home.workflow.preview.eyebrow",
    title: "home.workflow.preview.title",
    description: "home.workflow.preview.description",
    video: edgeCasesVideo,
  },
  {
    eyebrow: "home.workflow.search.eyebrow",
    title: "home.workflow.search.title",
    description: "home.workflow.search.description",
    video: searchVideo,
  },
  {
    eyebrow: "home.workflow.share.eyebrow",
    title: "home.workflow.share.title",
    description: "home.workflow.share.description",
    video: shareVideo,
  },
];

export function HomeInfoBoxSection() {
  const { t } = useTranslation();

  return (
    <section
      className="border-b border-white/10 bg-slate-950 px-4 py-6 md:py-24"
      id="workflow"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-normal text-lime-200">
              {t("home.workflow.eyebrow")}
            </p>
            <h2 className="max-w-2xl font-sans text-5xl font-black leading-tight text-white">
              {t("home.workflow.title")}
            </h2>
          </div>
          <p className="max-w-md text-lg leading-7 text-slate-400">
            {t("home.workflow.description")}
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {workflowItems.map((item, index) => (
            <article
              className="overflow-hidden rounded-sm border border-white/10 bg-slate-900/70"
              key={item.title}
            >
              <div className="aspect-[16/10] bg-slate-950">
                <AutoplayVideo
                  className="h-full w-full object-cover"
                  src={item.video}
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-normal text-lime-200">
                    {t(item.eyebrow)}
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-black leading-7 text-white">
                  {t(item.title)}
                </h3>
                <p className="text-base leading-7 text-slate-400">
                  {t(item.description)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
