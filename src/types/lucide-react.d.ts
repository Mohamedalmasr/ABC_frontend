declare module "lucide-react" {
  import * as React from "react";

  export type LucideIcon = React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> &
      React.RefAttributes<SVGSVGElement> & {
        absoluteStrokeWidth?: boolean;
        size?: number | string;
      }
  >;

  export const CalendarClock: LucideIcon;
  export const ClipboardList: LucideIcon;
  export const DollarSign: LucideIcon;
  export const FileSpreadsheet: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Menu: LucideIcon;
  export const Phone: LucideIcon;
  export const Play: LucideIcon;
  export const Send: LucideIcon;
  export const Settings: LucideIcon;
  export const Sparkles: LucideIcon;
  export const StickyNote: LucideIcon;
  export const User: LucideIcon;
  export const Users2: LucideIcon;
}
