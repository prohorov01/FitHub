const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const dataRoutes = require("./routes/dataRoutes");

app.use(express.json());
app.use(cors());

const indexPath = path.resolve(__dirname, "../client/src/index.html");

app.use(express.static(path.resolve(__dirname, "../client/src")));
app.use(dataRoutes);

app.get("/", (req, res) => {
  fs.readFile(indexPath, "utf8", (err, data) => {
    if (err) {
      console.error("Ошибка при чтении файла:", err);
      res.status(500).json({ error: "Ошибка сервера" });
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
