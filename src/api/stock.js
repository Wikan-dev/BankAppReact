export async function getStock() {
    const res = await fetch("http://localhost:3001/stock");
    return res.json();
}