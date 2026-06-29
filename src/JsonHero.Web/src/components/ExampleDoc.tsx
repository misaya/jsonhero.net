import { Link } from "react-router-dom";

export function ExampleDoc({
  id,
  title,
  path,
}: {
  id: string;
  title: string;
  path?: string;
}) {
  return (
    <Link
      to={`/j/${id}${path ? `?path=${path}` : ""}`}
      className="whitespace-nowrap rounded-sm border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-bold text-lime-200 transition hover:border-lime-300/40 hover:bg-lime-300/10 hover:text-lime-100"
    >
      {title}
    </Link>
  );
}
