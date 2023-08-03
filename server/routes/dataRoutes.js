const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/get-data", dataController.getData);
router.post("/save-data", dataController.saveData);

module.exports = router;
