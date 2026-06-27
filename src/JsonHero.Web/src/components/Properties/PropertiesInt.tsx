import { JSONIntType } from "@jsonhero/json-infer-types";
import {
  JSONTimestampFormat,
} from "@jsonhero/json-infer-types/lib/formats";
import { formatValue } from "~/utilities/formatter";
import { DataTable } from "../DataTable";
import { ValueIcon } from "../ValueIcon";
import { localeForLanguage, useLanguage, useTranslation } from "~/i18n";

export type PropertiesNumberProps = {
  type: JSONIntType;
};

export function PropertiesInt({ type }: { type: JSONIntType }) {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const locale = localeForLanguage(language);

  if (type.format == null) {
    return (
      <DataTable
        rows={[
          {
            key: "Formatted value",
            value: formatValue(type, { locale, t }) ?? "",
            icon: <ValueIcon type={type} />,
          },
          {
            key: "Type",
            value: t(type.name),
          },
        ]}
      />
    );
  }
  switch (type.format.name) {
    case "timestamp":
      return (
        <PropertiesTimestamp
          value={type.value}
          format={type.format}
          locale={locale}
        />
      );
    default:
      return <></>;
  }
}

function PropertiesTimestamp({
  value,
  format,
  locale,
}: {
  value: number;
  format: JSONTimestampFormat;
  locale: string;
}) {
  const date =
    format.variant === "millisecondsSinceEpoch"
      ? new Date(value)
      : format.variant === "secondsSinceEpoch"
      ? new Date(value * 1000)
      : new Date(value / 1000000);

  const properties = [
    {
      key: "rfc3339",
      value: date.toISOString(),
    },
    {
      key: "rfc2822",
      value: date.toUTCString(),
    },
    {
      key: "unix",
      value: (date.getTime() / 1000).toFixed(0),
    },
    {
      key: "unix ms",
      value: date.getTime().toString(),
    },
    {
      key: "date",
      value: date.toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    {
      key: "time",
      value: date.toLocaleTimeString(locale, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      }),
    },
  ];

  return <DataTable rows={properties} />;
}
