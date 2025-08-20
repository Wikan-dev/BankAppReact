import express from "express";// server/server.js
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors()); // biar bisa diakses dari React
app.use(express.json());

// Path ke file JSON
const FILE_PATH = "C:/Users/ASUS/Bank/src/assets/data/historyData.json";

app.delete("/clear-history", (req, res) => {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify({}, null, 2));
    res.json({message: "history cleared"})
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed to delete history"});
  }
})

// Endpoint untuk tambah data
app.post("/add-history", (req, res) => {
  let data = {};

  // Baca data lama
  if (fs.existsSync(FILE_PATH)) {
    data = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
  }

  // Hitung ID berikutnya
  const lastId = Object.keys(data).length;
  const newKey = `tf-${lastId + 1}`;

  // Tambah data baru
  data[newKey] = req.body;

  // Tulis ke file JSON
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));

  res.json({ success: true, data });
});

app.listen(3001, () => console.log("✅ Server jalan di http://localhost:3001"));
