import { JSONFloatType } from "@jsonhero/json-infer-types";
import { formatValue } from "~/utilities/formatter";
import { DataTable } from "../DataTable";
import { ValueIcon } from "../ValueIcon";
import { localeForLanguage, useLanguage, useTranslation } from "~/i18n";

export type PropertiesFloatProps = {
  type: JSONFloatType;
};

export function PropertiesFloat(info: PropertiesFloatProps) {
  const { language } = useLanguage();
  const { t } = useTranslation();

  return (
    <DataTable
      rows={[
        {
          key: "Formatted value",
          value:
            formatValue(info.type, {
              locale: localeForLanguage(language),
              t,
            }) ?? "",
          icon: <ValueIcon type={info.type} />,
        },
        {
          key: "Type",
          value: t(info.type.name),
        },
      ]}
    />
  );
}
