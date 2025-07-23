import { cn } from "@/lib/utils"
import { CheckCircle } from "lucide-react"

interface TiltedScrollItem {
  id: string;
  text: string;
}

interface TiltedScrollProps {
  items?: TiltedScrollItem[];
  className?: string;
}

export function TiltedScroll({ 
  items = defaultItems,
  className 
}: TiltedScrollProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5rem),linear-gradient(to_left,transparent,black_5rem),linear-gradient(to_bottom,transparent,black_5rem),linear-gradient(to_top,transparent,black_5rem)]">
        <div className="grid h-[250px] w-[300px] gap-5 animate-skew-scroll grid-cols-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="group flex items-center gap-2 cursor-pointer rounded-md border border-border/40 bg-gradient-to-b from-background/80 to-muted/80 p-4 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl dark:border-border"
            >
              <CheckCircle className="h-6 w-6 mr-2 stroke-foreground/40 transition-colors group-hover:stroke-foreground" />
              <p className="text-foreground/80 transition-colors group-hover:text-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const defaultItems: TiltedScrollItem[] = [
  { id: "1", text: "john.smith@techcorp.com" },
  { id: "2", text: "sarah.j@designstudio.com" },
  { id: "3", text: "mike.wilson@marketingpro.com" },
  { id: "4", text: "emily.d@startupinc.com" },
  { id: "5", text: "david.brown@consulting.com" },
  { id: "6", text: "lisa.garcia@digitalagency.com" },
  { id: "7", text: "alex.chen@innovate.com" },
  { id: "8", text: "maria.r@creative.com" },
  { id: "9", text: "james.lee@ecommerce.com" },
  { id: "10", text: "anna.k@saasplatform.com" },
  { id: "11", text: "robert.t@growthagency.com" },
  { id: "12", text: "sophie.m@techstartup.com" },
] 