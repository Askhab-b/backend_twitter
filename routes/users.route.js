const { Router } = require("express");
const { userController } = require("../controllers/users.controller");

const router = Router();

router.post("/users/:id", userController.addSave);
router.post("/users", userController.UserCreate);
router.delete("/users/:id", userController.usersDelete);
router.get("/users", userController.AllUsersGet);
router.get("/users", userController.usersFindId);

module.exports = router;
