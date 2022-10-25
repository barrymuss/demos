import type { AppType } from "next/dist/shared/lib/utils";
import { trpc } from "utils/trpc";

import { DefaultLayout, LoginLayout } from "components";

import "style/globals.scss";
import { useRouter } from "next/router";
import { menuRoute } from "src/routes";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  const userData = trpc.userData.useQuery({ username: "testuser" });
  const userMenu = trpc.userMenu.useQuery({ data: menuRoute });

  return (
    <DefaultLayout
      username={userData.data?.username}
      menu={userMenu.data?.result}
    >
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default trpc.withTRPC(MyApp);
