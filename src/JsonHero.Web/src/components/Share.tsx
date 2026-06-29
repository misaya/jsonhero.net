import React, { useCallback, useEffect, useState } from "react";
import { Body } from "./Primitives/Body";
import { ClipboardIcon } from "@heroicons/react/outline";
import { useJsonColumnViewState } from "~/hooks/useJsonColumnView";
import { useTranslation } from "~/i18n";

const buttonDefault = (label: string) => (
  <>
    <ClipboardIcon className="h-4 w-4 mr-[2px]" />
    <span>{label}</span>
  </>
);

export function Share() {
  const { t } = useTranslation();

  useEffect(() => {
    setLink(window.location.href);
  }, []);
  const [link, setLink] = useState("");

  const [copyText, setCopyText] = useState<React.ReactNode>(() =>
    buttonDefault(t("Copy"))
  );

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      setCopyText(buttonDefault(t("Copy")));
    }
  }, [copied, t]);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopyText(buttonDefault(t("Copy")));
        setCopied(false);
      }, 1800);

      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(link).then(
      function () {
        setCopyText(<span>{t("action.copied")}</span>);
        setCopied(true);
      },
      function (err) {
        setCopyText(<span>{t("action.copyFailed")}</span>);
        setCopied(true);
      }
    );
  }, [link, setCopyText, t]);

  const { selectedNodeId } = useJsonColumnViewState();

  const handleIncludesPath = useCallback(
    (includesPath: boolean) => {
      if (!selectedNodeId) {
        return;
      }

      if (includesPath) {
        const url = new URL(window.location.href);
        for (const [key] of url.searchParams) {
          url.searchParams.delete(key);
        }

        url.searchParams.append("path", selectedNodeId);

        setLink(url.href);
      } else {
        setLink(window.location.href);
      }
    },
    [link, selectedNodeId]
  );

  return (
    <div className="bg-indigo-700 text-white rounded-sm shadow-md w-[340px] p-3 transition">
      <Body className="text-sm mb-2 text-slate-300">
        {t("share.visibilityNotice")}
      </Body>
      <div className="flex">
        <div className="flex-grow whitespace-nowrap overflow-hidden rounded-l-sm bg-indigo-900 text-sm p-2 select-all">
          {link}
        </div>
        <div
          className="flex items-center justify-center text-lg text-slate-800 min-w-[74px] bg-white bg-opacity-80 rounded-r-sm transition hover:bg-opacity-100 cursor-pointer"
          onClick={handleCopy}
        >
          {copyText}
        </div>
      </div>
      <div className="form-check form-check-inline mt-2">
        <label className="flex items-center text-sm form-check-label text-slate-300 select-none hover:cursor-pointer transition">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-slate-300 rounded-sm bg-white checked:bg-indigo-700 checked:border-indigo-700 focus:outline-none duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 hover:cursor-pointer transition dark:border-slate-300 dark:bg-slate-200 dark:checked:bg-lime-500 dark:checked:border-lime-500"
            type="checkbox"
            id="inlineCheckbox"
            value="option"
            onChange={(e) => handleIncludesPath(e.target.checked)}
          ></input>
          {t("share.includesPath")}
        </label>
      </div>
    </div>
  );
}
