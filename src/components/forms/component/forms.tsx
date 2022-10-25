import { FC } from "react";
import { Form as Forms } from "antd";

type FormProps = {
  name?: any;
  form?: any;
  fields?: any;
  children?: any;
  initialValues?: any;
};

type ItemProps = {
  label?: any;
  name?: any;
  children?: any;
  labelCol?: any;
};

type ExtendFC = FC<FormProps> & { [key: string]: any };

const FormItem: FC<ItemProps> = (props) => {
  return (
    <Forms.Item
      style={{ marginBottom: 0 }}
      name={props.name}
      label={
        <span
          style={{
            textTransform: "capitalize",
            fontSize: 12,
            fontStyle: "italic",
            opacity: 0.8,
          }}
        >
          {props.label}
        </span>
      }
      labelCol={{ span: 24, ...props.labelCol }}
    >
      {props.children}
    </Forms.Item>
  );
};

const Form: ExtendFC = (props) => {
  const [forms] = Forms.useForm();
  return (
    <Forms
      form={forms}
      name={props.name}
      fields={props.fields}
      initialValues={props.initialValues}
    >
      {props.children}
    </Forms>
  );
};

Form.Item = FormItem;

export default Form;
