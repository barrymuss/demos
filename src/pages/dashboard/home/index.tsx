import { FC } from "react";
import { trpc } from "utils/trpc";
import { Grid, Card, Tabset, message, Icon } from "components";

import { Carousel } from "antd";

import HomeTarget from "modules/home/target";
import HomeTeknis from "modules/home/teknis";
import HomeWidget from "modules/home/widget";

import {
  pieData1,
  pieData2,
  widgetKeuangan,
  widgetIndikator,
} from "modules/home/mockdata";

import PieChart from "modules/home/charts/pieChart";

// const PieChart = dynamic(() => import("modules/home/charts/pieChart"), {
//   ssr: false,
// });

const Home: FC = () => {
  const hello = trpc.hello.useQuery({ text: "client" });
  const kinerjaPie = trpc.pieData.useQuery({ result: pieData1 });
  const teknisPie = trpc.pieData.useQuery({ result: pieData2 });

  const handleMessage = () => {
    message.notif({
      key: `test_1`,
      type: "success",
      title: "Lorem",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, mollitia!",
    });
  };

  return (
    <Card>
      <Tabset
        type="line"
        panel={[
          {
            title: "Target dan Kinerja Keuangan",
            icon: "target",
            content: (
              <Grid gutter={0}>
                <Grid.Col>
                  <Grid>
                    {widgetKeuangan.map((item, i) => {
                      return (
                        <Grid.Col
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                          key={item.label + i}
                        >
                          <HomeWidget
                            label={item.label}
                            status={`${item.status}`}
                            count={item.count}
                            target={item.target}
                            unit={item.unit}
                          />
                        </Grid.Col>
                      );
                    })}
                  </Grid>
                </Grid.Col>
                <Grid.Col>
                  <Card
                    title="Target dan Kinerja Keuangan"
                    subtitle="statistik target dan kinerja Keuangan pamjaya"
                    notshadow
                    notpadding
                  >
                    <Grid>
                      <Grid.Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={16}
                        xl={18}
                        xxl={16}
                      >
                        <HomeTarget />
                      </Grid.Col>

                      <Grid.Col xs={24} sm={24} md={24} lg={8} xl={6} xxl={8}>
                        <PieChart
                          series={[
                            {
                              name: "Target & Kinerja",
                              colorByPoint: true,
                              data: kinerjaPie.data?.result,
                            },
                          ]}
                        />
                      </Grid.Col>
                    </Grid>
                  </Card>
                </Grid.Col>
              </Grid>
            ),
          },
          {
            title: "Target dan Kinerja Teknis",
            icon: "target",
            content: (
              <Grid gutter={0}>
                <Grid.Col>
                  <Grid>
                    {widgetIndikator.map((item, i) => {
                      if (item.unit != null) {
                        return (
                          <Grid.Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            key={item.label + i}
                          >
                            <HomeWidget
                              label={item.label}
                              status={`${item.status}`}
                              count={item.count}
                              unit={item.unit}
                            />
                          </Grid.Col>
                        );
                      }
                      return (
                        <Grid.Col
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                          key={item.label + i}
                        >
                          <HomeWidget
                            type="other"
                            label={item.label}
                            status={`${item.status}`}
                            count={item.count}
                          />
                        </Grid.Col>
                      );
                    })}
                  </Grid>
                </Grid.Col>
                <Grid.Col>
                  <Card
                    title="Target dan Kinerja Teknis"
                    subtitle="statistik target dan kinerja teknis pamjaya"
                    notshadow
                    notpadding
                  >
                    <Grid>
                      <Grid.Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={16}
                        xl={18}
                        xxl={16}
                      >
                        <HomeTeknis />
                      </Grid.Col>

                      <Grid.Col xs={24} sm={24} md={24} lg={8} xl={6} xxl={8}>
                        <PieChart
                          series={[
                            {
                              name: "Target & Kinerja Teknis",
                              colorByPoint: true,
                              data: teknisPie.data?.result,
                            },
                          ]}
                        />
                      </Grid.Col>
                    </Grid>
                  </Card>
                </Grid.Col>
              </Grid>
            ),
          },
        ]}
      />
    </Card>
  );
};

export default Home;
