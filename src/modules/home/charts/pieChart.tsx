import { FC } from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { baseOptions } from "components";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

type Props = {
  id?: any;
  series?: any[];
  options?: any;
};

const PieChart: FC<Props> = (props) => {
  const options = {
    ...baseOptions,
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      height: 200,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    legend: {
      align: "left",
      layout: "vertical",
      verticalAlign: "top",
      floating: true,
    },
    plotOptions: {
      ...baseOptions.plotOptions,
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: props.series,
  };

  return (
    <HighchartsReact
      containerProps={{ className: "charts", id: props.id }}
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default PieChart;
