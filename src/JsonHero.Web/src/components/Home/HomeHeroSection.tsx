import { useTranslation } from "~/i18n";
import { NewFile } from "../NewFile";

export function HomeHeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex items-center overflow-hidden border-b border-white/10 bg-slate-950 px-4 pb-6 pt-[72px] sm:pt-20 lg:min-h-[82vh]"
      id="inspector"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(190,242,100,0.14),transparent_34%),radial-gradient(circle_at_86%_16%,rgba(56,189,248,0.14),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0),rgba(30,41,59,0.72))]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
      <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(520px,1.05fr)]">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-lime-300/30 bg-lime-300/10 px-3 py-1 text-xs font-black uppercase tracking-normal text-lime-200">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            {t("home.hero.eyebrow")}
          </div>
          <h1
            className="mb-4 max-w-[660px] font-sans text-5xl font-black leading-[0.95] text-white sm:text-6xl"
            style={{ lineHeight: 0.95 }}
          >
            {t("home.hero.title")}
          </h1>
          <p className="mb-5 max-w-xl font-sans text-lg leading-7 text-slate-300">
            {t("home.hero.description")}
          </p>
          <div className="mb-5 grid grid-cols-3 gap-3 text-sm text-slate-300 sm:max-w-xl">
            {[
              ["home.hero.stats.fileLimit.value", "home.hero.stats.fileLimit.label"],
              ["home.hero.stats.schema.value", "home.hero.stats.schema.label"],
              ["home.hero.stats.start.value", "home.hero.stats.start.label"],
            ].map(([valueKey, labelKey]) => (
              <div
                className="rounded-sm border border-white/10 bg-white/[0.04] p-3"
                key={labelKey}
              >
                <div className="font-mono text-lg text-lime-200">
                  {t(valueKey)}
                </div>
                <div className="mt-1 leading-4 text-slate-400">
                  {t(labelKey)}
                </div>
              </div>
            ))}
          </div>
          <NewFile />
        </div>
        <div className="relative hidden lg:block">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}

const treeRows = [
  { depth: 0, keyName: "order", value: "object", color: "bg-lime-300" },
  { depth: 1, keyName: "id", value: "or_84d1", color: "bg-sky-300" },
  { depth: 1, keyName: "customer", value: "object", color: "bg-white" },
  { depth: 2, keyName: "email", value: "ava@example.com", color: "bg-lime-300" },
  { depth: 2, keyName: "plan", value: "enterprise", color: "bg-fuchsia-300" },
  { depth: 1, keyName: "items", value: "array[3]", color: "bg-sky-300" },
  { depth: 2, keyName: "0.sku", value: "json-pro", color: "bg-white" },
  { depth: 1, keyName: "metadata", value: "object", color: "bg-fuchsia-300" },
];

function ProductPreview() {
  const { t } = useTranslation();

  return (
    <div className="rounded-sm border border-white/10 bg-slate-900/90 shadow-2xl shadow-slate-950/40 backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <div className="text-xs font-bold uppercase text-slate-400">
            {t("home.preview.liveDocument")}
          </div>
          <div className="text-lg font-black text-white">checkout-session.json</div>
        </div>
        <div className="rounded-sm border border-lime-300/30 bg-lime-300/10 px-2 py-1 font-mono text-xs text-lime-200">
          12.4 KB
        </div>
      </div>
      <div className="grid min-h-[430px] lg:grid-cols-[210px_minmax(0,1fr)]">
        <aside className="border-b border-white/10 bg-slate-950/70 p-3 lg:border-b-0 lg:border-r lg:border-white/10">
          <div className="mb-3 rounded-sm border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-xs text-slate-300">
            {t("home.preview.searchLabel")}
          </div>
          <ol className="space-y-1">
            {treeRows.map((row) => (
              <li
                className="flex items-center justify-between rounded-sm px-2 py-1.5 text-sm text-slate-300 odd:bg-white/[0.035]"
                key={`${row.depth}-${row.keyName}`}
                style={{ paddingLeft: 8 + row.depth * 16 }}
              >
                <span className="flex min-w-0 items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${row.color}`} />
                  <span className="truncate font-mono">{row.keyName}</span>
                </span>
                <span className="ml-3 shrink-0 text-xs text-slate-500">
                  {row.value}
                </span>
              </li>
            ))}
          </ol>
        </aside>
        <div className="flex flex-col">
          <div className="grid grid-cols-3 border-b border-white/10 text-center text-xs font-bold uppercase text-slate-400">
            <div className="border-r border-white/10 px-3 py-3 text-lime-200">
              {t("Preview")}
            </div>
            <div className="border-r border-white/10 px-3 py-3">
              {t("Schema")}
            </div>
            <div className="px-3 py-3">{t("Share")}</div>
          </div>
          <div className="grid flex-1 gap-4 p-3 md:grid-cols-[1fr_0.88fr]">
            <div className="rounded-sm border border-white/10 bg-slate-950/80 p-3">
              <div className="mb-3 text-xs font-bold uppercase text-slate-500">
                $.customer.email
              </div>
              <div className="mb-3 rounded-sm bg-slate-800 px-3 py-2 font-mono text-sm text-lime-200">
                "ava@example.com"
              </div>
              <dl className="grid gap-3 text-sm">
                <PreviewStat label={t("Type")} value={t("home.preview.typeValue")} />
                <PreviewStat
                  label={t("home.preview.relatedValues")}
                  value={t("home.preview.relatedValuesCount")}
                />
                <PreviewStat
                  label={t("home.preview.pathCopied")}
                  value="$.customer.email"
                />
              </dl>
            </div>
            <div className="space-y-3">
              <div className="rounded-sm border border-white/10 bg-white/[0.04] p-3">
                <div className="mb-3 text-xs font-bold uppercase text-slate-500">
                  {t("home.preview.inferredShape")}
                </div>
                <div className="space-y-1.5 font-mono text-xs text-slate-300">
                  <CodeLine color="text-sky-200" text='"customer": {' />
                  <CodeLine color="text-lime-200" text='  "email": "string",' />
                  <CodeLine color="text-fuchsia-200" text='  "plan": "enum"' />
                  <CodeLine color="text-sky-200" text="}" />
                </div>
              </div>
              <div className="rounded-sm border border-sky-300/20 bg-sky-300/10 p-3">
                <div className="mb-1 text-sm font-black text-sky-100">
                  {t("home.preview.shareTitle")}
                </div>
                <div className="text-sm leading-6 text-slate-300">
                  {t("home.preview.shareDescription")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2 last:border-b-0 last:pb-0">
      <dt className="text-slate-500">{label}</dt>
      <dd className="truncate text-right font-mono text-slate-200">{value}</dd>
    </div>
  );
}

function CodeLine({ color, text }: { color: string; text: string }) {
  return <div className={color}>{text}</div>;
}
