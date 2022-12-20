const express = require("express");

const typeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMiddleware");

const router = express.Router();

router.post("/", checkRole("ADMIN"), typeController.create);
router.get("/", typeController.getAll);

module.exports = router;