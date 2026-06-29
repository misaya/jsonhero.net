import { Link } from "react-router-dom";
import { GithubIcon } from "../Icons/GithubIcon";
import { Logo } from "../Icons/Logo";

export type HomeFooterProps = {
  maxWidth?: string;
};

export function HomeFooter({ maxWidth = "1150px" }: HomeFooterProps) {
  return (
    <footer className="flex w-full flex-col items-center bg-slate-950 px-4 py-8 md:py-10">
      <div
        className="flex w-full items-center justify-between border-t border-white/10 pt-8"
        style={{ maxWidth: maxWidth }}
      >
        <div className="flex flex-grow items-start opacity-90">
          <Logo />
        </div>
        <ol className="ml-2 flex items-center gap-4">
          <li className="text-white/70 transition hover:cursor-pointer hover:text-white">
            <Link to="/privacy">Privacy</Link>
          </li>
          <li className="text-white/70 transition hover:cursor-pointer hover:text-white">
            <a
              href="https://github.com/misaya/jsonhero.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </li>
        </ol>
      </div>
    </footer>
  );
}
