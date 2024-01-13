import ky from "ky";
import { forwardRef, useEffect, useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import clsx from "clsx";

const GraphChart = forwardRef(({ chartData, className, chartRef }, ref) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    if (chartData) {
      setData(chartData);
    }
  }, [chartData]);

  const options = useMemo(() => {
    if (!data) return {};

    /**
     * @type {import("echarts").EChartsOption}
     */
    const _options = {
      title: {
        text: "Les Miserables",
        subtext: "Default layout",
        top: "bottom",
        left: "right",
        show: false,
      },
      tooltip: {},
      legend: [
        {
          // selectedMode: 'single',
          data: data.categories.map(function (a) {
            return a.name;
          }),
          show: false,
        },
      ],
      animationDuration: 1500,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          type: "graph",
          layout: "none",
          data: data.nodes,
          links: data.links,
          categories: data.categories,
          roam: true,
          label: {
            position: "right",
            formatter: "{b}",
          },
          lineStyle: {
            color: "source",
            curveness: 0.3,
          },
          emphasis: {
            focus: "adjacency",
            lineStyle: {
              width: 10,
            },
          },
        },
      ],
    };

    return _options;
  }, [data]);

  return (
    <ReactECharts option={options} className={clsx(className)} ref={ref} />
  );
});

GraphChart.displayName = "GraphChart";

export default GraphChart;
