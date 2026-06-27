import { ShareIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import { DocumentTitle } from "./DocumentTitle";
import { GithubStar } from "./UI/GithubStar";
import { Logo } from "./Icons/Logo";
import { Share } from "./Share";
import { NewDocument } from "./NewDocument";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "./UI/Popover";

import { useJsonDoc } from "~/hooks/useJsonDoc";

export function Header() {
  const { doc } = useJsonDoc();

  return (
    <header className="flex items-center justify-between w-screen h-[40px] bg-indigo-700 dark:bg-slate-800 border-b-[1px] border-slate-600">
      <div className="flex pl-2 gap-1 sm:gap-1.5 pt-0.5 h-8 justify-center items-center">
        <div className="w-20 sm:w-24">
          <Logo />
        </div>
      </div>
      <DocumentTitle />
      <ol className="flex text-sm items-center gap-2 px-4">
        {!doc.readOnly && (
          <form
            method="delete"
            onSubmit={(e) =>
              !confirm(
                "This will permanently delete this document from jsonhero.net, are you sure you want to continue?"
              ) && e.preventDefault()
            }
          >
            <button type="submit">
              <button className="flex items-center justify-center py-1 bg-slate-200 text-slate-800 bg-opacity-80 text-base font-bold px-2 rounded uppercase hover:cursor-pointer hover:bg-opacity-100 transition">
                <TrashIcon className="w-4 h-4 mr-0.5"></TrashIcon>
                Delete
              </button>
            </button>
          </form>
        )}

        <Popover>
          <PopoverTrigger>
            <button className="flex items-center justify-center bg-lime-500 text-slate-800 bg-opacity-90 text-base font-bold px-2 py-1 rounded uppercase hover:cursor-pointer hover:bg-opacity-100 transition">
              <PlusIcon className="w-4 h-4 mr-0.5"></PlusIcon>
              New
            </button>
          </PopoverTrigger>
          <PopoverContent side="bottom" sideOffset={8}>
            <NewDocument />
            <PopoverArrow
              className="fill-current text-indigo-700"
              offset={20}
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <button className="flex items-center justify-center py-1 bg-slate-200 text-slate-800 bg-opacity-90 text-base font-bold px-2 rounded uppercase hover:cursor-pointer hover:bg-opacity-100 transition">
              <ShareIcon className="w-4 h-4 mr-1"></ShareIcon>
              Share
            </button>
          </PopoverTrigger>
          <PopoverContent side="bottom" sideOffset={8}>
            <Share />
            <PopoverArrow
              className="fill-current text-indigo-700"
              offset={20}
            />
          </PopoverContent>
        </Popover>

        <li className="opacity-90 transition hover:cursor-pointer hover:opacity-100">
          <GithubStar />
        </li>
      </ol>
    </header>
  );
}
