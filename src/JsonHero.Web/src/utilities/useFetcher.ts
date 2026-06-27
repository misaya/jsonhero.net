import { useState, useCallback } from "react";

// Minimal fetch helper for components that need imperative loads or submits.
export function useFetcher() {
  const [state, setState] = useState<"idle" | "submitting" | "loading">("idle");
  const [data, setData] = useState<any>(null);

  const submit = useCallback(
    async (body: any, options?: { method?: string; action?: string }) => {
      const method = options?.method || "POST";
      const action = options?.action || "";
      setState("submitting");
      try {
        const res = await fetch(action, {
          method,
          headers: { "Content-Type": "application/json" },
          body: method !== "GET" ? JSON.stringify(body) : undefined,
        });
        const json = await res.json().catch(() => null);
        setData(json);
        setState("idle");
      } catch {
        setState("idle");
      }
    },
    []
  );

  const load = useCallback(async (href: string) => {
    setState("loading");
    try {
      const res = await fetch(href);
      const json = await res.json();
      setData(json);
      setState("idle");
      return json;
    } catch {
      setState("idle");
      return null;
    }
  }, []);

  return { state, data, submit, load, Form: "form" as any };
}
