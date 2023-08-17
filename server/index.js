const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  fs.readFile("server.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading data" });
      return;
    }
    const users = JSON.parse(data).users;
    res.json(users);
  });
});

app.post("/api/users", (req, res) => {
  const newUser = req.body;
  fs.readFile("server.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading data" });
      return;
    }
    const jsonData = JSON.parse(data);
    jsonData.users.push(newUser);
    fs.writeFile("server.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        res.status(500).json({ error: "Error writing data" });
        return;
      }
      res.json(newUser);
    });
  });
});

app.post("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  fs.readFile("server.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading data" });
      return;
    }
    const jsonData = JSON.parse(data);
    jsonData.users[userId] = { ...jsonData.users[userId], ...updatedData };
    fs.writeFile("server.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        res.status(500).json({ error: "Error writing data" });
        return;
      }
      res.json(jsonData.users[userId]);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
