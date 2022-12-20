const express = require("express");

const brandController = require("../controllers/brandController");
const checkRole = require("../middleware/checkRoleMiddleware");

const router = express.Router();

router.post("/", checkRole("ADMIN"), brandController.create);
router.get("/", brandController.getAll)

module.exports = router;