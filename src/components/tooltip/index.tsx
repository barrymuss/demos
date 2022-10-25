import { FC } from "react";
import { Tooltip as Tooltips, Popconfirm, PopconfirmProps } from "antd";

type tooltipProps = {
  className?: any;
  children?: any;
  title?: any;
  placement?: any;
  trigger?: any;
};

type ExtendFC = FC<tooltipProps> & { [key: string]: any };

const Tooltip: ExtendFC = (props) => {
  const titles = (
    <span style={{ textTransform: "capitalize" }}>{props.title}</span>
  );

  return (
    <Tooltips
      overlayClassName={props.className}
      color="#fff"
      overlayInnerStyle={{
        color: "#36414c",
        textTransform: "capitalize",
      }}
      title={titles}
      {...props}
    >
      {props.children}
    </Tooltips>
  );
};

const Confirm = (props: PopconfirmProps) => {
  return <Popconfirm {...props}>{props.children}</Popconfirm>;
};

Tooltip.Confirm = Confirm;

export default Tooltip;
