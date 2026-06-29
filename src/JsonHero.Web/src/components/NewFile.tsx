import { DragAndDropForm } from "./DragAndDropForm";
import { Title } from "./Primitives/Title";
import { SampleUrls } from "./SampleUrls";
import { UrlForm } from "./UrlForm";
import { useTranslation } from "~/i18n";

export function NewFile() {
  const { t } = useTranslation();

  return (
    <div className="max-w-xl rounded-sm border border-white/10 bg-slate-900/75 p-3 shadow-2xl shadow-slate-950/20 backdrop-blur">
      <div className="mb-3">
        <UrlForm />
      </div>
      <DragAndDropForm />

      <div className="mt-3 border-t border-white/10 pt-3">
        <Title className="mb-2 text-sm uppercase tracking-normal text-slate-400">
          {t("home.samples.prompt")}
        </Title>
        <SampleUrls />
      </div>
    </div>
  );
}
