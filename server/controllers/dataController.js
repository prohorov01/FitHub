const fs = require("fs");

const getData = (req, res) => {
  fs.readFile("data/data.json", "utf8", (err, data) => {
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
  const data = req.body;

  const jsonData = JSON.stringify(data);

  fs.writeFile("data/data.json", jsonData, "utf8", (err) => {
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
