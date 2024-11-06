import { PauseIcon, PlayIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ButtonData {
  name: string;
  icon: React.ReactElement;
  action: () => void;
}

export function Header() {
  return (
    <header className="w-full h-[40px] fixed top-0 left-0 border-b border-b-white/20 bg-gray-900 pl-[60px]">
      <nav className="px-3 flex items-center justify-center">
        <button></button>
      </nav>
    </header>
  );
}

export function SideBar() {
  const handleRunCode = () => {
    console.log("run code");
  };

  const handlePauseCode = () => {
    console.log("pause code");
  };

  const actionsButtons: ButtonData[] = [
    {
      name: "Run",
      icon: <PlayIcon className="w-5 h-5 text-neutral-300" />,
      action: handleRunCode,
    },
    {
      name: "Pause",
      icon: <PauseIcon className="w-5 h-5 text-neutral-300" />,
      action: handlePauseCode,
    },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-[60px] border-r border-r-white/20 backdrop-blur-md z-20">
      <div className="flex flex-col gap-y-6 items-center justify-center my-6">
        {actionsButtons.map((actBtn) => (
          <TooltipProvider key={actBtn.name} delayDuration={300}>
            <Tooltip>
              <TooltipTrigger onClick={actBtn.action}>
                {actBtn.icon}
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-900 text-neutral-200">
                <p>{actBtn.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </aside>
  );
}
