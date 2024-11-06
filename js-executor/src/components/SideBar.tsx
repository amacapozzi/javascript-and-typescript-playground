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
    <aside className="fixed hidden md:block top-0 h-screen w-[60px] border-r border-r-white/20">
      <div className="flex mx-auto flex-col gap-y-6 items-center justify-center my-6">
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
