const express = require("express");

const {
  getPortfolioData,
  updatingData,
  deletingData,
  createData,
} = require("../controllers/portfolioController");

const router = express.Router();

router.get("/", getPortfolioData);

// UPDATE Portfolio
router.put("/update/:modelName/:modelId", updatingData);

// DELETE Data
router.delete("/delete/:modelName/:modelId", deletingData);

// CREATE Data
router.post("/create/:modelName", createData);

module.exports = router;
