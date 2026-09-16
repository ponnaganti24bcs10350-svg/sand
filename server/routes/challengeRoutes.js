const express = require("express");

const challenges = require("../challenges/challenges");

const {
  runChallenge,
} = require("../controllers/challengeController");

const { protect } = require("../middleware/auth");

const router = express.Router();

=======
router.get("/random", protect ,(req, res) => {
>>>>>>> origin/vidya-work
=======
router.get("/random", protect ,(req, res) => {
>>>>>>> origin/vidya
  const randomIndex = Math.floor(
    Math.random() * challenges.length
  );

=======
>>>>>>> origin/vidya
  const randomChallenge =
    challenges[randomIndex];

  res.json(randomChallenge);
=======
>>>>>>> origin/vidya-work
=======
>>>>>>> origin/vidya
});

router.post(
  "/run",
  protect,
  runChallenge
);

module.exports = router;