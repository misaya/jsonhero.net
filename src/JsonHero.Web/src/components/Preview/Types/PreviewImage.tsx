import { formatBytes } from "~/utilities/formatter";
import { PreviewBox } from "../PreviewBox";
import { PreviewProperties, PreviewProperty } from "../PreviewProperties";
import type { PreviewImage as PreviewImageData } from "./preview.types";
import { localeForLanguage, useLanguage, useTranslation } from "~/i18n";

export type PreviewImageProps = {
  info: PreviewImageData;
};

export function PreviewImage({ info }: PreviewImageProps) {
  let properties: Array<PreviewProperty> = [];
  const { language } = useLanguage();
  const { t } = useTranslation();

  if (info.mimeType) {
    properties.push({ key: "mimeType", title: info.mimeType });
  }

  if (info.size) {
    properties.push({
      key: "fileSize",
      title: formatBytes(info.size, 2, {
        locale: localeForLanguage(language),
        t,
      }),
    });
  }

  const src = info.image ? info.image.url : info.url;

  return (
    <PreviewBox link={info.url}>
      <img className="block max-h-96 w-full object-contain" src={src} />
      <PreviewProperties properties={properties} />
    </PreviewBox>
  );
}
