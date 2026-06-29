import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "~/i18n";

import invariant from "tiny-invariant";

export function DragAndDropForm() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const filenameInputRef = useRef<HTMLInputElement>(null);
  const rawJsonInputRef = useRef<HTMLInputElement>(null);

  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      if (!formRef.current || !filenameInputRef.current) {
        return;
      }

      if (acceptedFiles.length === 0) {
        return;
      }

      const firstFile = acceptedFiles[0];

      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        if (reader.result == null) {
          return;
        }

        let jsonValue: string | undefined = undefined;

        if (typeof reader.result === "string") {
          jsonValue = reader.result;
        } else {
          const decoder = new TextDecoder("utf-8");
          jsonValue = decoder.decode(reader.result);
        }

        invariant(rawJsonInputRef.current, "rawJsonInputRef is null");
        invariant(jsonValue, "jsonValue is undefined");

        rawJsonInputRef.current.value = jsonValue;

        formRef.current.submit();
      };
      reader.readAsArrayBuffer(firstFile);
      filenameInputRef.current.value = firstFile.name;
    },
    [formRef.current, filenameInputRef.current, rawJsonInputRef.current]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted: onDrop,
    maxFiles: 1,
    maxSize: 1024 * 1024 * 1,
    multiple: false,
    accept: "application/json",
  });

  return (
    <form method="post" action="/actions/createFromFile" ref={formRef}>
      <div
        {...getRootProps()}
        className="block min-w-[260px] cursor-pointer rounded-sm border border-dashed border-white/20 bg-slate-950/70 p-3 text-base text-slate-300 transition hover:border-lime-300/70 hover:bg-slate-950 focus:border-lime-300 focus:ring-lime-300"
      >
        <input {...getInputProps()} />
        <div className="flex items-center">
          <ArrowCircleDownIcon
            className={`mr-3 inline h-6 w-6 ${
              isDragActive ? "text-lime-300" : "text-slate-500"
            }`}
          />
          <p className={`${isDragActive ? "text-lime-300" : ""}`}>
            {isDragActive
              ? t("upload.dropActive")
              : t("upload.dropPrompt")}
          </p>
        </div>

        <input type="hidden" name="filename" ref={filenameInputRef} />
        <input type="hidden" name="rawJson" ref={rawJsonInputRef} />
      </div>
    </form>
  );
}
