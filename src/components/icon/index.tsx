import { FC } from "react";
import * as icons from "./iconData";

type GetIconProps = {
  type: keyof typeof icons;
  className?: any;
  style?: any;
  onClick?: any;
};

const Icon: FC<GetIconProps> = (props) => {
  const Component = icons[props.type];
  return (
    <Component className={props.className} style={props.style} {...props} />
  );
};

export default Icon;
