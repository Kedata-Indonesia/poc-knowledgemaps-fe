import GraphChart from "@/components/shared/graph-chart";
import ky from "ky";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import dayjs from "dayjs";
import { HiX } from "react-icons/hi";

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;
  const chartRef = useRef(null);

  const [chartData, setChartData] = useState(undefined);

  const [samples, setSamples] = useState([]);
  const [filteredSamples, setFilteredSamples] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    ky.get("/les-miserables.json")
      .then((res) => res.json())
      .then((res) => {
        res.nodes.forEach(function (node) {
          node.data = {
            ...node.data,
            category_name: res.categories[node.category].name,
          };
          node.label = {
            show: node.symbolSize > 30,
          };
        });

        setChartData(res);
        setSamples(res.nodes);
      });
  }, []);

  useEffect(() => {
    if (!activeCategory) return setFilteredSamples(samples);

    setFilteredSamples(
      samples.filter((sample) => sample.category === activeCategory)
    );
  }, [activeCategory, samples]);

  useEffect(() => {
    /**
     * @type {import("echarts").ECharts}
     */
    const chart = chartRef.current.getEchartsInstance();

    // Listen to series click event
    chart.on("click", (params) => {
      const { componentType } = params;
      if (componentType !== "series") return;

      const { data } = params;

      setActiveCategory(data.category);
    });
  }, []);

  return (
    <div className="w-screen">
      <div className="flex w-full gap-5">
        <div className="w-[60%] px-4 py-6 flex flex-col">
          <h3 className="text-2xl">
            Knowlegde map of <b>{q}</b>
          </h3>
          <GraphChart
            className="flex-grow"
            chartData={chartData}
            ref={chartRef}
          />
        </div>
        <div className="w-[40%] h-screen flex flex-col overflow-hidden border-l border-l-gray-300">
          <div className="w-full text-center bg-gray-100 p-4 border-b border-gray-300">
            Overview (200 documents)
          </div>
          {activeCategory && (
            <div className="p-4 border-b border-b-gray-300 flex gap-3 items-center">
              <p>
                Category: <b>{chartData.categories?.[activeCategory].name}</b>
              </p>
              <button className="flex p-1 rounded-full bg-gray-100" onClick={() => setActiveCategory('')}>
                <HiX />
              </button>
            </div>
          )}
          <div className="w-full h-full overflow-y-auto flex flex-col">
            {filteredSamples?.map(({ data }, index) => (
              <div
                key={`items-${index}`}
                className="flex flex-col gap-2 items-start border-b border-b-gray-300 p-4"
              >
                <div className="text-xs bg-gray-100 inline-block py-1 px-5 rounded-full">
                  {data.category_name}
                </div>
                <a
                  href="#"
                  className="font-semibold leading-7 text-lg hover:underline"
                >
                  {data.title}
                </a>
                <p className="text-sm">{data.author[0]?.name}</p>
                <p className="text-xs text-gray-400">
                  {dayjs(data.date).format("DD MMMM YYYY")}
                </p>
                <p className="text-xs">
                  [doi]:{" "}
                  <a href="#" className="underline">
                    {data.doi}
                  </a>
                </p>
                <p className="text-xs">
                  [link]:{" "}
                  <a href="#" className="underline">
                    {data.id}
                  </a>
                </p>
                <p className="text-sm line-clamp-4">{data.summary}</p>
                <a className="btn btn-primary !btn-sm !rounded-full">
                  <AiOutlineFilePdf />
                  PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
