const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/save-data", (req, res) => {
  const data = req.body.fitnessData;

  const jsonData = JSON.stringify({ fitnessData: data });

  fs.writeFile("data.json", jsonData, "utf8", (err) => {
    if (err) {
      console.error("Ошибка при записи в файл:", err);
      res.status(500).json({ error: "Ошибка сервера" });
    } else {
      console.log("Данные успешно записаны в файл");
      res.json({ message: "Данные успешно сохранены" });
    }
  });
});

app.get("/get-data", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Ошибка при чтении файла:", err);
      res.status(500).json({ error: "Ошибка сервера" });
    } else {
      const jsonData = JSON.parse(data);
      console.log("Данные успешно загружены из файла");
      res.json(jsonData);
    }
  });
});

app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
