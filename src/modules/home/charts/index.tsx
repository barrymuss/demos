import { FC } from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { baseOptions } from "components";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

type props = {
  id?: any;
  series?: any[];
  options?: any;
};

const HomeChart: FC<props> = (props) => {
  const options = {
    ...baseOptions,
    ...props.options,
    series: props.series,
    xAxis: [
      {
        ...props.options?.xAxis,
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        crosshair: true,
      },
    ],
    yAxis: {
      ...baseOptions.yAxis,
      ...props.options?.yAxis,
    },
    plotOptions: {
      ...props.options?.plotOptions,
      series: {
        ...baseOptions.plotOptions.series,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },
    tooltip: {
      ...props.options?.tooltip,
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },
  };

  return (
    <HighchartsReact
      containerProps={{ className: "charts", id: props.id }}
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default HomeChart;
