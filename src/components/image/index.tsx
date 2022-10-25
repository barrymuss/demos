import { Avatar as Avatars } from "antd";
import Image from "next/image";
import { FC } from "react";
import Icon from "../icon";

type Avaprops = {
  icons?: any;
  children?: any;
};

type Groupprops = {
  children?: any;
  maxCount?: any;
  maxPopoverTrigger?: any;
  size?: any;
  maxStyle?: any;
};

type Defaultprops = {
  className?: any;
  alt?: any;
  width?: any;
  height?: any;
  src?: any;
  url?: any;
  loader?: any;
  layout?: any;
  objectFit?: any;
  priority?: any;
  style?: any;
};

type ExtendFC = FC<Defaultprops> & { [key: string]: any };

const Avatar: FC<Avaprops> = (props) => {
  return (
    <Avatars icon={props.icons && <Icon type={props.icons} />} {...props}>
      {props.children}
    </Avatars>
  );
};

const AvatarGroup: FC<Groupprops> = (props) => {
  return <Avatars.Group {...props}>{props.children}</Avatars.Group>;
};

const Images: ExtendFC = (props) => {
  return <Image className={props.className} src={props.src} {...props} />;
};

Images.Ava = Avatar;
Images.Group = AvatarGroup;

export default Images;
