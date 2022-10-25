import { FC } from "react";
import { Breadcrumb as BreadMenu } from "antd";
import { useRouter } from "next/router";
import { capitalize } from "function";

type BreadProps = {
  className?: any;
};

const Breadcrumb: FC<BreadProps> = (props) => {
  const router = useRouter();

  const breadcrumbView = () => {
    const pathname = router.pathname;
    const pathnames = pathname.split("/").filter((item) => item);

    return (
      <BreadMenu className={props.className}>
        {pathnames.map((name, index) => {
          const isLast = index === pathnames.length - 1;
          const names = name.split("_").join(" ");
          return isLast ? (
            <BreadMenu.Item key={index}>
              <label style={{ fontWeight: "500" }}>{capitalize(names)}</label>
            </BreadMenu.Item>
          ) : (
            <BreadMenu.Item key={index}>
              <label style={{ userSelect: "none" }}>{capitalize(names)}</label>
            </BreadMenu.Item>
          );
        })}
      </BreadMenu>
    );
  };

  return <>{breadcrumbView()}</>;
};

export default Breadcrumb;
