import { useEffect, useRef, useState } from "react";
import { ChartManager } from "@/utils/ChartManager";
import { getKLines } from "@/actions/getKlines";
import { KLine } from "@/utils/types";
import { useTheme } from "next-themes";

const TradeView = ({ market }: { market: string }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartManagerRef = useRef<ChartManager>(null);
  const { theme } = useTheme();

  const bgColor = useRef({ background: "#dfdfdf", text: "white" });
  const [chartDimensions, setChartDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Update background and text colors based on theme
  useEffect(() => {
    bgColor.current.background = theme === "light" ? "#dfdfdf" : "#020817";
    bgColor.current.text = theme === "light" ? "#0a1528f" : "#e5e5e5";
  }, [theme]);

  // Update chart dimensions based on viewport size
  const updateDimensions = () => {
    if (chartRef.current) {
      const { offsetWidth } = chartRef.current;
      const height = Math.min(520, offsetWidth * 0.6); // Responsive height
      setChartDimensions({ width: offsetWidth, height });
    }
  };

  useEffect(() => {
    updateDimensions(); // Initial calculation
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Initialize chart with fetched data
  const init = async () => {
    let kLinesData: KLine[] = [];
    try {
      kLinesData = await getKLines(
        market,
        "1h",
        Math.floor(
          (new Date().getTime() - 2 * (1000 * 60 * 60 * 24 * 7)) / 1000,
        ),
        Math.floor(new Date().getTime() / 1000),
      );
    } catch (e) {
      console.error(e);
    }
    if (chartRef.current) {
      if (chartManagerRef.current) {
        chartManagerRef.current.destroy();
      }
      const chartManager = new ChartManager(
        chartRef.current,
        [
          ...kLinesData?.map((x) => ({
            close: parseFloat(x.close),
            high: parseFloat(x.high),
            low: parseFloat(x.low),
            open: parseFloat(x.open),
            timestamp: new Date(x.end),
          })),
        ].sort((x, y) => (x.timestamp < y.timestamp ? -1 : 1)) || [],
        {
          background: bgColor.current.background,
          color: "white",
          text: bgColor.current.text,
        },
      );
      //@ts-ignore
      chartManagerRef.current = chartManager;
    }
  };

  useEffect(() => {
    init();
  }, [market, chartRef]);

  return (
    <div
      ref={chartRef}
      style={{
        height: `${chartDimensions.height}px`,
        width: "100%",
        marginTop: 4,
        transition: "height 0.3s ease, width 0.3s ease",
      }}
    ></div>
  );
};

export default TradeView;
