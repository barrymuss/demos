import { FC, useEffect, useState } from "react";
import { Tooltip, Icon, Button } from "components";
import styles from "style/elements/menu.module.scss";

import { breakPointOberver } from "function";
import { useRouter } from "next/router";

type Menuprops = {
  data?: any;
  placement?: any;
  exchange?: any;
};

const breakPoints = {
  tablet: "(min-width: 300px) and (max-width: 1023px)",
};

const Menu: FC<Menuprops> = ({ data, placement, exchange }) => {
  const router = useRouter();

  const [breakPoint, setbreakPoint] = useState();

  useEffect(() => {
    breakPointOberver(breakPoints, setbreakPoint);
  }, [breakPoint]);

  const handleLink = (link: any) => {
    if (link != null || link != "" || link != undefined) {
      router.push(`${link}`);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles["menu-wrapper"]}>
      <div className={styles["menu-list"]}>
        {data &&
          data.map((item: any) => {
            if (item.children?.length == 0) {
              return (
                <div key={item.label} className={styles["menu-item"]}>
                  <Button
                    size="default"
                    className={
                      router.pathname == item?.link
                        ? styles["menu-button-active"]
                        : styles["menu-button"]
                    }
                    type={router.pathname == item.link ? "primary" : "ghost"}
                    onClick={() => {
                      handleLink(item.link);
                      exchange;
                    }}
                    block
                  >
                    <Icon type={item.icon == null ? "homeIcon" : item.icon} />
                    <span className={styles["button-label"]}>{item.label}</span>
                  </Button>
                </div>
              );
            } else {
              return (
                <Tooltip
                  placement={placement == null ? "right" : placement}
                  trigger={"click" || "hover"}
                  key={item.label}
                  title={
                    <div className={styles["submenu-list"]}>
                      {item.children.map((c: any) => {
                        return (
                          <div className={styles["submenu-item"]} key={c.label}>
                            <Button
                              size="default"
                              className={
                                router.pathname == c?.link
                                  ? styles["submenu-button-active"]
                                  : styles["submenu-button"]
                              }
                              type={
                                router.pathname == c.link ? "primary" : "ghost"
                              }
                              onClick={() => {
                                handleLink(c.link);
                                exchange;
                              }}
                              block
                            >
                              <span className={styles["button-label"]}>
                                {c.label}
                              </span>
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  }
                >
                  <div className={styles["menu-item"]}>
                    <Button
                      size="default"
                      className={
                        router.pathname == item?.link
                          ? styles["menu-button-active"]
                          : styles["menu-button"]
                      }
                      type={router.pathname == item.link ? "primary" : "ghost"}
                      block
                    >
                      <Icon type={item.icon == null ? "homeIcon" : item.icon} />
                      <span className={styles["button-label"]}>
                        {item.label}
                      </span>
                      <Icon type="arrowRight" className={styles["arrow"]} />
                    </Button>
                  </div>
                </Tooltip>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Menu;
