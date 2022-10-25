import { FC, useEffect, useState } from "react";
import {
  Images,
  Icon,
  Dropdown,
  Button,
  Tooltip,
  Breadcrumb,
} from "components";
import Menu from "./menu";

import styles from "style/elements/layout.module.scss";
import defaultLogo from "assets/images/defaultLogo.png";
import { Drawer } from "antd";
import { useRouter } from "next/router";
import Heads from "./head";

type Props = {
  children: any;
  username?: any;
  menu?: any;
  navigate?: any;
};

const DefaultLayout: FC<Props> = (props) => {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLog = () => {
    console.log(mobileMenu);
  };

  const overlay = (
    <div className={styles["overlay-button"]}>
      <Button block icons="useroutlined">
        Profil
      </Button>
      <Button type="dashed" block danger icons="logout">
        Keluar
      </Button>
    </div>
  );

  return (
    <div className={styles["layout-default"]}>
      <Heads />
      <div className={styles["header"]}>
        <div className={styles["header-item-logo"]}>
          <Images
            src={defaultLogo}
            layout="fill"
            objectFit="contain"
            alt="mainLogo"
          />
        </div>
        <div className={styles["header-item-info"]}>
          <div className={styles["info-mobile"]}>
            <div
              className={styles["button-icon-mobile"]}
              onClick={() => setMobileMenu(true)}
            >
              <Icon className={styles["icon"]} type="menu" />
            </div>
          </div>
          <div className={styles["info-button"]}>
            <Tooltip placement="bottom" title="notifikasi">
              <Dropdown
                className={styles["button-icon-single"]}
                trigger="click"
              >
                <Icon className={styles["icon"]} type="notification" />
              </Dropdown>
            </Tooltip>
          </div>
          <div className={styles["info-button"]}>
            <Tooltip placement="bottom" title="tingkat kualitas air">
              <Dropdown
                className={styles["button-icon-single"]}
                trigger="click"
              >
                <Icon className={styles["icon"]} type="water" />
              </Dropdown>
            </Tooltip>
          </div>
          <div className={styles["info-button"]}>
            <span className={styles["button-label"]}>{props.username}</span>

            <Dropdown
              className={styles["button-icon"]}
              trigger="click"
              overlay={overlay}
              overlayHeight="100%"
            >
              <Icon className={styles["icon"]} type="setting" />
            </Dropdown>
          </div>
        </div>
      </div>
      <div className={styles["body"]}>
        <div className={styles["sidemenu"]}>
          <Menu data={props.menu} />
        </div>
        <div className={styles["content"]}>
          <Breadcrumb className={styles["breadcrumb"]} />
          <div className={styles["inner-content"]}>{props.children}</div>
        </div>
      </div>
      <Drawer
        placement="left"
        title="Navigasi"
        className="Drawer_test"
        contentWrapperStyle={{
          width: "100%",
        }}
        bodyStyle={{ padding: 0 }}
        closable
        open={mobileMenu}
        onClose={() => setMobileMenu(false)}
      >
        <div>
          <Menu placement="bottom" data={props.menu} />
        </div>
      </Drawer>
    </div>
  );
};

export default DefaultLayout;
