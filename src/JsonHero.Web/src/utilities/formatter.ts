import { Temporal } from "@js-temporal/polyfill";
import { inferTemporal } from "./inferredTemporal";

import {
  JSONDateTimeFormat,
  JSONStringFormat,
  JSONValueType,
} from "@jsonhero/json-infer-types";
import { TranslationFunction } from "~/i18n";

export function formatRawValue(type: JSONValueType): string {
  switch (type.name) {
    case "string":
      return type.value;
    case "int":
      return type.value.toString();
    case "float":
      return type.value.toString();
    case "bool":
      return type.value ? "true" : "false";
    case "null":
      return "null";
    case "array":
      return "[]";
    case "object":
      return "{}";
  }
}

export type FormatValueOptions = {
  leafNodesOnly?: boolean;
  locale?: string;
  t?: TranslationFunction;
};

export function formatValue(
  type: JSONValueType,
  options?: FormatValueOptions
): string | undefined {
  switch (type.name) {
    case "array": {
      if (options?.leafNodesOnly) {
        return;
      }

      if (type.value.length == 0) {
        return formatRawValue(type);
      } else if (type.value.length === 1) {
        return options?.t?.("1 item") ?? "1 item";
      } else {
        return (
          options?.t?.("{count} items", { count: type.value.length }) ??
          `${type.value.length} items`
        );
      }
    }
    case "object": {
      if (options?.leafNodesOnly) {
        return;
      }

      if (Object.keys(type.value).length == 0) {
        return formatRawValue(type);
      } else if (Object.keys(type.value).length === 1) {
        return options?.t?.("1 field") ?? "1 field";
      } else {
        return (
          options?.t?.("{count} fields", {
            count: Object.keys(type.value).length,
          }) ?? `${Object.keys(type.value).length} fields`
        );
      }
    }
    case "bool": {
      return type.value ? "true" : "false";
    }
    case "float":
    case "int":
      return formatNumber(type.value, options?.locale);
    case "null": {
      return "null";
    }
    case "string":
      return formatString(type.value, type.format, options?.locale);
    default:
      const _exhaustiveCheck: never = type;
      return _exhaustiveCheck;
  }
}

export function formatNumber(value: number, locale?: string): string {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 6,
  }).format(value);
}

function formatString(
  value: string,
  format?: JSONStringFormat,
  locale?: string
): string {
  if (!format) {
    return value;
  }

  switch (format.name) {
    case "email":
      return value;
    case "uri":
      return value;
    case "datetime":
      return formatDateTime(value, format, locale);
    default:
      return value;
  }
}

export function formatDateTime(
  value: string,
  format?: JSONDateTimeFormat,
  locale?: string
): string {
  if (!format) {
    return value;
  }

  const temporal = inferTemporal(value, format);

  if (!temporal) {
    return value;
  }

  switch (format.parts) {
    case "datetime":
      return temporal.toLocaleString(locale, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      });
    case "date":
      return temporal.toLocaleString(locale, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    case "time":
      return temporal.toLocaleString(locale, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
  }
}

export function formatBytes(
  bytes: number,
  decimals = 2,
  options?: { locale?: string; t?: TranslationFunction }
): string {
  if (bytes === 0) return `0 ${options?.t?.("Bytes") ?? "Bytes"}`;

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
  const formattedValue = new Intl.NumberFormat(options?.locale, {
    maximumFractionDigits: dm,
  }).format(value);
  const unit = sizes[i] === "Bytes" ? options?.t?.("Bytes") ?? "Bytes" : sizes[i];

  return `${formattedValue} ${unit}`;
}
