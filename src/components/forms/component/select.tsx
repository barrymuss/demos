import { FC, ReactNode } from "react";
import { Select as Selects } from "antd";
import { Icon } from "components";

const { Option, OptGroup } = Selects;

type Selectprops = {
  mode?: any;
  suffixIcon?: any;
  prefixIcon?: any;
  children?: any;
  placeholder?: any;
  options?: any;
  value?: any;
  defaultValue?: any;
  onChange?: any;
};

type ExtendFC = FC<Selectprops> & { [key: string]: any };

const Select: ExtendFC = ({
  mode,
  suffixIcon,
  defaultValue,
  prefixIcon,
  children,
  placeholder,
  options,
  value,
  onChange,
}) => {
  return (
    <Selects
      mode={mode}
      value={value}
      onChange={onChange}
      showArrow
      suffixIcon={
        suffixIcon != null ? (
          <Icon type={suffixIcon} />
        ) : (
          <Icon type="caretdown" />
        )
      }
      placeholder={placeholder == null ? "select data" : placeholder}
      options={options}
      defaultValue={defaultValue}
    >
      {children}
    </Selects>
  );
};

type Optionprops = {
  children?: ReactNode;
};

const Options: FC<Optionprops> = ({ children, ...props }) => {
  return <Option {...props}>{children}</Option>;
};

const OptionGroup: FC<Optionprops> = ({ children, ...props }) => {
  return <OptGroup {...props}>{children}</OptGroup>;
};

Select.Option = Options;
Select.Group = OptionGroup;

export default Select;
