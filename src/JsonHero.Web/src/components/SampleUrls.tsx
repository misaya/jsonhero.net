import { ExampleDoc } from "./ExampleDoc";
import { useTranslation } from "~/i18n";

export function SampleUrls() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-start flex-wrap gap-2">
      <ExampleDoc
        id="d9udW60cLOok"
        title={t("Tweet JSON")}
        path="data.0.entities.urls.0.expanded_url"
      />
      <ExampleDoc id="PjHo1o5MVeH4" title={t("Github API")} />
      <ExampleDoc
        id="XKqIsPgCssUN"
        title={t("Airtable API")}
        path="records.3.createdTime"
      />
      <ExampleDoc
        id="bSc7r1Ta0fED"
        title={t("Unsplash API")}
        path="4.urls.regular"
      />
    </div>
  );
}
