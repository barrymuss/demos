import { FC } from "react";
import { Card, Icon } from "components";

import styles from "style/elements/widget.module.scss";

type props = {
  label?: any;
  status?: any;
  count?: any;
  target?: any;
  unit?: any;
  type?: any;
};

const HomeWidget: FC<props> = (props) => {
  return (
    <Card className={styles["widget"]}>
      <div className={styles["widget-label"]}>
        <div className={styles["label"]}>{props.label}</div>
        <Icon
          className={
            props.status == "up"
              ? styles["icon-upper"]
              : props.status == "down"
              ? styles["icon-down"]
              : ""
          }
          type={props.status == "up" ? "caretup" : "caretdown"}
        />
      </div>
      <div className={styles["widget-content"]}></div>
      <div className={styles["widget-count"]}>
        {props.type == "other" ? (
          <h5 className={styles["counter"]}>{props.count}</h5>
        ) : (
          <h5 className={styles["counter"]}>
            {props.unit == null && (
              <span className={styles["currency"]}>RP</span>
            )}
            {props.count}
            {props.unit != null && (
              <span className={styles["unit"]}>{props.unit}</span>
            )}
          </h5>
        )}
        {props.target != null && (
          <h6 className={styles["target"]}>
            {props.target}
            <span className={styles["unit"]}>{props.unit}</span>
          </h6>
        )}
      </div>
    </Card>
  );
};

export default HomeWidget;
