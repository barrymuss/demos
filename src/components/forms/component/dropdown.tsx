import { FC } from "react";
import { Dropdown as Drop } from "antd";

type DropProps = {
  className?: any;
  overlayHeight?: any;
  overlay?: any;
  children?: any;
  trigger?: any;
};

const Dropdown: FC<DropProps> = (props) => {
  const overlaydiv = (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "space-between",
        rowGap: 8,
        height: props.overlayHeight == null ? 160 : props.overlayHeight,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      {props.overlay}
    </div>
  );

  return (
    <Drop
      className={props.className}
      overlay={overlaydiv}
      overlayStyle={overStyle}
      {...props}
    >
      {props.children}
    </Drop>
  );
};

const overStyle = {
  background: "#fff",
  boxShadow: "3px 0px 20px -12px rgba(54, 65, 76, 0.5)",
  borderRadius: 3,
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 0,
  paddingRight: 0,
  marginTop: 6,
};

export default Dropdown;
