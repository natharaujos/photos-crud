import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip";

interface TTooltip {
  message: string;
  children: React.ReactNode;
}

export default function TooltipPersonalized({ children, message }: TTooltip) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="p-0">{children}</TooltipTrigger>
        <TooltipContent>{message}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
