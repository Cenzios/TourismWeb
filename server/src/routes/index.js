const express = require('express');
const router = express.Router();

const healthCheckRoutes = require("./router.healthCheck");
const tvSeriesRoutes = require("./router.tvSeriesRoutes");

router.use("/health-check", healthCheckRoutes);
router.use("/tv-series", tvSeriesRoutes);

module.exports = router;
