import { Icon } from "@/types/interfaces";
import Image from "next/image";
import { IconType } from "react-icons";
import * as ReactIcons from "react-icons/fa";
const IconComponent: React.FC<{ icon: Icon }> = ({ icon }) => {
   if (icon.type === "reactIcon") {
      const IconComponent = ReactIcons[icon.value as keyof typeof ReactIcons] as IconType;
      return <IconComponent />;
   } else if (icon.type === "imageUrl") {
      return <Image src={icon.value} alt="Technology Icon" width={24} height={24} />;
   } else if (icon.type === "svg") {
      return <span dangerouslySetInnerHTML={{ __html: icon.value }} />;
   }
   return null;
};
export default IconComponent
