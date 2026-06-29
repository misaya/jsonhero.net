import { DragAndDropForm } from "./DragAndDropForm";
import { Title } from "./Primitives/Title";
import { SampleUrls } from "./SampleUrls";
import { UrlForm } from "./UrlForm";

export function NewDocument() {
  return (
    <div className="w-96 max-w-[calc(100vw-2rem)] rounded-sm border border-white/10 bg-slate-900 p-4 text-white shadow-2xl shadow-slate-950/50 transition">
      <div className="flex flex-col">
        <UrlForm className="mb-2" />
        <DragAndDropForm />

        <div className="mt-4 border-t border-white/10 pt-4">
          <Title className="mb-3 text-sm uppercase tracking-normal text-slate-400">
            No JSON? Try a sample
          </Title>
          <SampleUrls />
        </div>
      </div>
    </div>
  );
}
