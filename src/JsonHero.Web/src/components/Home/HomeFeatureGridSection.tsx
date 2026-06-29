import {
  CodeIcon,
  CubeTransparentIcon,
  FastForwardIcon,
  LinkIcon,
  LockOpenIcon,
  MoonIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { Body } from "../Primitives/Body";
import { LargeTitle } from "../Primitives/LargeTitle";
import { HomeGridFeatureItem } from "./HomeGridFeatureItem";

const featureItems = [
  {
    icon: SearchIcon,
    title: "Fuzzy search",
    body: "Find matching keys and values across large payloads, then jump straight to the result.",
  },
  {
    icon: FastForwardIcon,
    title: "Keyboard shortcuts",
    body: "Move through columns, copy paths, and keep inspection fast when the file is not.",
  },
  {
    icon: CubeTransparentIcon,
    title: "Auto JSON Schema",
    body: "Infer a JSON Schema draft 2020-12 shape from the document you are reviewing.",
  },
  {
    icon: LinkIcon,
    title: "Deep links",
    body: "Share a document with the active path preserved so collaborators land on the same value.",
  },
  {
    icon: MoonIcon,
    title: "Dark by default",
    body: "The homepage and viewer are tuned for long inspection sessions without visual noise.",
  },
  {
    icon: LockOpenIcon,
    title: "Open source",
    body: "Run JsonHero.NET yourself, inspect the code, or fork the current repository on GitHub.",
  },
];

export function HomeFeatureGridSection() {
  return (
    <section
      className="border-b border-white/10 bg-slate-950 px-4 py-16 md:py-24"
      id="features"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-normal text-lime-200">
              Built for inspection
            </p>
            <LargeTitle className="text-5xl leading-tight text-white">
              Enough power for messy API data.
            </LargeTitle>
          </div>
          <Body className="text-lg leading-7 text-slate-400">
            The viewer keeps navigation, schema understanding, previews, and
            sharing close to the document so you can stay with the payload.
          </Body>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((feature) => (
            <HomeGridFeatureItem
              icon={feature.icon}
              key={feature.title}
              title={feature.title}
              titleClassName="text-white"
            >
              <Body className="mt-2 leading-6 text-slate-400">
                {feature.body}
              </Body>
            </HomeGridFeatureItem>
          ))}
          <div className="rounded-sm border border-lime-300/20 bg-lime-300/10 p-6 lg:col-span-3">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="mb-2 text-2xl font-black text-white">
                  Prefer code view or VS Code?
                </h3>
                <p className="max-w-2xl text-base leading-7 text-slate-300">
                  Switch into code when you need the raw document. The inherited
                  VS Code extension belongs to the upstream project and is not
                  affiliated with JsonHero.NET.
                </p>
              </div>
              <a
                className="inline-flex h-10 items-center justify-center gap-2 rounded-sm border border-white/10 bg-slate-950 px-4 text-sm font-black uppercase text-lime-200 transition hover:border-lime-300/50 hover:text-lime-100"
                href="https://marketplace.visualstudio.com/items?itemName=JSONHero.jsonhero-vscode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CodeIcon className="h-5 w-5" />
                VS Code extension
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
