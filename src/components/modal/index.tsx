import { FC } from "react";
import { Modal as Modals } from "antd";
import Button from "../button";
import Card from "../card";

export type Modalprops = {
  children?: any;
  style?: any;
  className?: any;
  header?: any;
  visible?: any;
  footer?: any;
  onSubmit?: any;
  onCancel?: any;
};

const Modal: FC<Modalprops> = (props) => {
  const ModalFooter = [
    <Button key="cancel" type="text" danger onClick={props.onCancel}>
      Batal
    </Button>,
    <Button key="submit" type="primary" onClick={props.onSubmit}>
      Simpan
    </Button>,
  ];

  return (
    <Modals
      style={props.style}
      wrapClassName={`modals ${props.className}`}
      open={props.visible}
      title={
        <Card.Title
          style={{ marginBottom: 0 }}
          title={props.header.title}
          subtitle={props.header.subtitle}
        />
      }
      footer={ModalFooter}
      closable={false}
    >
      {props.children}
    </Modals>
  );
};

export default Modal;
