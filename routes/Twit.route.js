const { Router } = require("express");
const { twitController } = require("../controllers/Twit.controller");

const router = Router();

router.post("/twits", twitController.postTwit);
router.delete("/twits/:id", twitController.deleteTwit);
router.patch("/twits/:id", twitController.patchTwit);
router.get("/twits", twitController.AllTwits);
router.get("/twits/:id", twitController.TwitsFindId);

module.exports = router;
