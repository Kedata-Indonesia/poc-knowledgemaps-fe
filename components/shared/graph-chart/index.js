import ky from "ky";
import { forwardRef, useEffect, useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import clsx from "clsx";

const GraphChart = forwardRef(({ className, chartRef }, ref) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    ky.get("/les-miserables.json")
      .then((res) => res.json())
      .then((res) => {
        res.nodes.forEach(function (node) {
          node.label = {
            show: node.symbolSize > 30,
          };
        });
        setData(res);
      });
  }, []);

  const options = useMemo(() => {
    if (!data) return {};

    return {
      title: {
        text: "Les Miserables",
        subtext: "Default layout",
        top: "bottom",
        left: "right",
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
          name: "Les Miserables",
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
  }, [data]);

  return (
    <ReactECharts option={options} className={clsx(className)} ref={ref} />
  );
});

GraphChart.displayName = "GraphChart";

export default GraphChart;
