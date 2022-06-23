import { AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { RiDashboardLine, RiUserSettingsLine } from "react-icons/ri";

export const sidebar = [
  {
    icon: RiDashboardLine,
    linkName: "Dashboard",
    url: "/dashboard"
  },
  {
    icon: MdOutlineSwapHorizontalCircle,
    linkName: "Transaction",
    url: "/transaction"
  },
  {
    icon: AiOutlineTransaction,
    linkName: "Investment",
    url: "/investment"
  },
  {
    icon: AiOutlineTransaction,
    linkName: "Our Plans",
    url: "/ourplans"
  },
  {
    icon: RiUserSettingsLine,
    linkName: "My Profile",
    url: "/profile"
  }
]