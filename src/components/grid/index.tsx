import { Row as Rows, Col as Cols } from "antd";
import { FC } from "react";

type GridProps = {
  children?: any;
  gutter?: any;
  span?: any;
  flex?: any;
  style?: any;
  wrap?: true | false;
  className?: any;
  xs?: any;
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
  xxl?: any;
};

type ExtendFC = FC<GridProps> & { [key: string]: any };

const Grid: ExtendFC = (props) => {
  const Guts = [
    { xs: 8, sm: 10, md: 10, lg: 12, xl: 12 },
    { xs: 8, sm: 10, md: 10, lg: 12, xl: 12 },
  ];
  return (
    <Rows
      gutter={props.gutter == null ? Guts : props.gutter}
      className={props.className}
      style={props.style}
      {...props}
    >
      {props.children}
    </Rows>
  );
};

const Col: FC<GridProps> = (props) => {
  return (
    <Cols
      flex={props.flex}
      span={props.span == null ? 24 : props.span}
      {...props}
    >
      {props.children}
    </Cols>
  );
};

Grid.Col = Col;

export default Grid;
