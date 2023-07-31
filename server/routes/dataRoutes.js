const express = require("express");
const dataController = require("../controllers/dataController");

const router = express.Router();

router.get("/get-data", dataController.getData);

router.post("/save-data", dataController.saveData);

module.exports = router;
