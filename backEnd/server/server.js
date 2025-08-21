// import express from "express";// server/server.js
// import fs from "fs";
// import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";

// const _filename = fileURLToPath(import.meta.url);
// const _dirname = path.dirname(_filename);

// const FILE_PATH

// const app = express();
// app.use(cors()); // biar bisa diakses dari React
// app.use(express.json());

// // Path ke file JSON
// // const FILE_PATH = "C:/Users/ASUS/Bank/backEnd/historyData.json";


// app.delete("/clear-history", (req, res) => {
//   try {
//     fs.writeFileSync(FILE_PATH, JSON.stringify({}, null, 2));
//     res.json({message: "history cleared"})
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "failed to delete history"});
//   }
// })

// // Endpoint untuk tambah data
// app.post("/add-history", (req, res) => {
//   let data = {};

//   // Baca data lama
//   if (fs.existsSync(FILE_PATH)) {
//     data = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
//   }

//   // Hitung ID berikutnya
//   const lastId = Object.keys(data).length;
//   const newKey = `tf-${lastId + 1}`;

//   // Tambah data baru
//   data[newKey] = req.body;

//   // Tulis ke file JSON
//   fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));

//   res.json({ success: true, data });
// });

// app.listen(3001, () => console.log("✅ Server jalan di http://localhost:3001"));


import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Path JSON relatif ke server.js
const FILE_PATH = path.join(__dirname, "historyData.json");

// Clear history
app.delete("/clear-history", (req, res) => {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify({}, null, 2));
    res.json({ message: "history cleared" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed to delete history" });
  }
});

// Tambah history
app.post("/add-history", (req, res) => {
  let data = {};

  if (fs.existsSync(FILE_PATH)) {
    data = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
  }

  const lastId = Object.keys(data).length;
  const newKey = `tf-${lastId + 1}`;
  data[newKey] = req.body;

  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));

  res.json({ success: true, data });
});

// Serve frontend (React dist)
app.use(express.static(path.join(__dirname, "../../dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist", "index.html"));
});

// Jalankan server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server jalan di port ${PORT}`));
