export async function getStock() {
  const res = await fetch("http://localhost:3001/stock");
  if (!res.ok) throw new Error("Network error " + res.status);
  return res.json();
}
