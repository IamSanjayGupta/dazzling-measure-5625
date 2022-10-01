import { AiFillSetting, AiFillTag, AiFillTags, AiOutlineTeam } from "react-icons/ai";
import { BsAlarmFill, BsFillFolderFill, BsFillGridFill } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { GiNotebook } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { TiGroup } from "react-icons/ti";
import { MdSubscriptions } from "react-icons/md";
import { RiHotelFill, RiPagesLine } from "react-icons/ri";
import { TbBeach, TbChartArcs3 } from "react-icons/tb";
import { BiGitMerge } from "react-icons/bi";

export const topMenu = [
  { id: 1, name: "Time", icon: BsAlarmFill },
  { id: 2, name: "My Work", icon: BsFillGridFill },
  { id: 3, name: "Task", icon: GiNotebook },
  { id: 4, name: "Team", icon: AiOutlineTeam },
];

export const analyseMenu = [
  { id: 11, name: "Reports", icon: GoGraph },
  { id: 12, name: "Activity", icon: TbChartArcs3 },
];

export const manageMenu = [
  { id: 21, name: "Projects", icon: BsFillFolderFill },
  { id: 22, name: "Clients", icon: RiHotelFill },
  { id: 22, name: "Invoices", icon: RiPagesLine },
  { id: 22, name: "Time Off", icon: TbBeach },
];

export const workspaceMenu = [
  { id: 31, name: "Settings", icon: AiFillSetting },
  { id: 32, name: "Members", icon: HiUserCircle },
  { id: 32, name: "Teams", icon: TiGroup },
  { id: 32, name: "Tags", icon: AiFillTags },
  { id: 32, name: "Integrations", icon: BiGitMerge },
  { id: 32, name: "Subscription", icon: MdSubscriptions },
];
