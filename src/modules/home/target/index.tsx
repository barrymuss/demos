import React, { Suspense } from "react";
import { Tabset } from "components";
import ChartPendapatan from "./chartPendapatan";
import ChartLaba from "./chartLaba";
import ChartBopo from "./chartBopo";
import ChartCapex from "./chartCapex";

const HomeTarget = () => {
  return (
    <Tabset
      panel={[
        {
          title: "Pendapatan usaha",
          icon: "linechart",
          content: (
            <Suspense fallback={<>....Loading!</>}>
              <ChartPendapatan />
            </Suspense>
          ),
        },
        {
          title: "Laba usaha",
          icon: "percentage",
          content: (
            <Suspense fallback={<>....Loading!</>}>
              <ChartLaba />
            </Suspense>
          ),
        },
        {
          title: "Bopo",
          icon: "distributionIcon",
          content: (
            <Suspense fallback={<>....Loading!</>}>
              <ChartBopo />
            </Suspense>
          ),
        },
        {
          title: "Capex",
          icon: "riseoutline",
          content: (
            <Suspense fallback={<>....Loading!</>}>
              <ChartCapex />
            </Suspense>
          ),
        },
      ]}
    />
  );
};

export default HomeTarget;
