import { useEffect, useState } from "react";
import { getStock } from "./api/stock";

function StockData() {
  const [stock, setStock] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getStock();
        setStock(data);
      } catch (e) {
        setErr(e?.message || "Fetch error");
      }
    })();
  }, []);

  // --- DERIVE DATA DI SINI, BUKAN DI DALAM JSX ---
  const timeSeries = stock?.["Time Series (5min)"] || null;

  // Some responses bisa ngasih "Note" (rate limit) atau "Error Message"
  const isRateLimited = !!stock?.Note;
  const hasErrorMsg = !!stock?.["Error Message"];

  // Ambil timestamp terbaru (sort just in case)
  const latestKey = timeSeries
    ? Object.keys(timeSeries).sort((a, b) => new Date(b) - new Date(a))[0]
    : null;

  const latestData = latestKey ? timeSeries[latestKey] : null;

  if (err) return <p>❌ {err}</p>;
  if (isRateLimited) return <p>⏳ Kena rate limit Alpha Vantage. Coba tunggu bentar.</p>;
  if (hasErrorMsg) return <p>❌ API Error: {stock["Error Message"]}</p>;
  if (!latestData) return <p>Loading...</p>;

  return (
    <div>
      <h2>Latest Data ({latestKey})</h2>
      <p>Open: {latestData["1. open"]}</p>
      <p>High: {latestData["2. high"]}</p>
      <p>Low: {latestData["3. low"]}</p>
      <p>Close: {latestData["4. close"]}</p>
      <p>Volume: {latestData["5. volume"]}</p>
    </div>
  );
}

export default StockData;
