import { DragAndDropForm } from "./DragAndDropForm";
import { Title } from "./Primitives/Title";
import { SampleUrls } from "./SampleUrls";
import { UrlForm } from "./UrlForm";
import { useTranslation } from "~/i18n";

export function NewFile() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mb-4">
        <UrlForm />
      </div>
      <DragAndDropForm />

      <div className="mt-4 pt-5">
        <Title className="mb-2 text-slate-200">
          {t("home.samples.prompt")}
        </Title>
        <SampleUrls />
      </div>
    </div>
  );
}
