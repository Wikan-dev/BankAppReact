import { useEffect, useState } from "react";
import { getStock } from "./api/stock";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

export default function StockData() {
  const [stock, setStock] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getStock();
        console.log("🔍 API Response:", data);
        setStock(data);
      } catch (e) {
        console.error(e);
        setErr(e?.message || "Fetch error");
      }
    })();
  }, []);

  if (err) return <p>❌ {err}</p>;
  if (!stock) return <p>Loading...</p>;

  // Tampil pesan dari API kalau bukan data time series
  if (stock.Note) return <p>⏳ {stock.Note}</p>;
  if (stock.Information) return <p>⚠️ {stock.Information}</p>;
  if (stock["Error Message"]) return <p>❌ {stock["Error Message"]}</p>;

  // Validasi super ketat biar gak .map ke undefined
  const rawSeries = stock && typeof stock === "object" ? stock["Time Series (5min)"] : null;
  const timeSeries = rawSeries && typeof rawSeries === "object" ? rawSeries : null;

  if (!timeSeries || Object.keys(timeSeries).length === 0) {
    console.log("⚠️ API response (no series):", stock);
    return <p>⚠️ Data tidak tersedia</p>;
  }

  // Aman buat .map
  const sortedKeys = Object.keys(timeSeries).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  // Ambil close price, skip yang gak valid
  const closePrice = sortedKeys
    .map((k) => {
      const row = timeSeries[k];
      const v = row?.["4. close"];
      const n = Number.parseFloat(v);
      return Number.isFinite(n) ? n : null;
    })
    .filter((n) => n !== null);

  // Samain panjang label & data
  const labels = sortedKeys.slice(sortedKeys.length - closePrice.length);

  if (labels.length === 0 || closePrice.length === 0) {
    return <p>⚠️ Data series kosong</p>;
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Close Price",
        data: closePrice,
        borderColor: "red",
        backgroundColor: "rgba(255,0,0,0.3)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Stock close price (5 min interval)" },
    },
  };

  return <Line options={options} data={data} />;
}
