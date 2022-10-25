import { FC } from "react";
import { Input as Inputs } from "antd";

type InputProps = {
  type?: any;
  value?: any;
  defaultValue?: any;
  placeholder?: any;
  min?: any;
  max?: any;
  allowClear?: any;
  onChange?: any;
  ref?: any;
  row?: any;
  maxLength?: any;
  autoResize?: any;
  style?: any;
  bordered?: any;
};

type InputgroupProps = {
  children?: any;
  compact?: any;
  size?: any;
};

type ExtendFC = FC<InputProps> & { [key: string]: any };

const Input: ExtendFC = (props) => {
  return (
    <>
      {props.type == "password" ? (
        <Inputs.Password
          ref={props.ref}
          type="password"
          placeholder={
            props.placeholder == null ? "placeholder" : props.placeholder
          }
          {...props}
        />
      ) : props.type == "textarea" ? (
        <Inputs.TextArea ref={props.ref} {...props} />
      ) : props.type == "number" ? (
        <Inputs ref={props.ref} type="number" {...props} />
      ) : (
        <Inputs
          ref={props.ref}
          type="text"
          value={props.value}
          defaultValue={props.defaultValue}
          placeholder={
            props.placeholder == null ? "placeholder" : props.placeholder
          }
          {...props}
        />
      )}
    </>
  );
};

const InputGroup: FC<InputgroupProps> = (props) => {
  return (
    <Inputs.Group compact={props.compact} size={props.size}>
      {props.children}
    </Inputs.Group>
  );
};

Input.Group = InputGroup;

export default Input;
