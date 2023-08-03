const fs = require("fs");
const path = require("path");
const dataFilePath = path.resolve(__dirname, "../data/data.json");

const getData = (req, res) => {
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Ошибка при чтении файла:", err);
      res.status(500).json({ error: "Ошибка сервера" });
    } else {
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (err) {
        console.error("Ошибка при разборе данных из файла:", err);
        res.status(500).json({ error: "Ошибка сервера" });
      }
    }
  });
};

const saveData = (req, res) => {
  const data = req.body.fitnessData;

  const jsonData = JSON.stringify({ fitnessData: data });

  fs.writeFile(dataFilePath, jsonData, "utf8", (err) => {
    if (err) {
      console.error("Ошибка при записи в файл:", err);
      res.status(500).json({ error: "Ошибка сервера" });
    } else {
      console.log("Данные успешно записаны в файл");
      res.json({ message: "Данные успешно сохранены" });
    }
  });
};

module.exports = {
  getData,
  saveData,
};
