const express = require("express");

const challenges = require("../challenges/challenges");

const {
  runChallenge,
} = require("../controllers/challengeController");

const { protect } = require("../middleware/auth");

const router = express.Router();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
router.get("/random", protect ,(req, res) => {
=======
router.get("/random", protect, (req, res) => {
>>>>>>> origin/ishikas-15th-sept
=======
router.get("/random", protect ,(req, res) => {
>>>>>>> origin/vidya-work
=======
router.get("/random", protect ,(req, res) => {
>>>>>>> origin/vidya
  const randomIndex = Math.floor(
    Math.random() * challenges.length
  );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/vidya-work
=======
>>>>>>> origin/vidya
  const randomChallenge =
    challenges[randomIndex];

  res.json(randomChallenge);
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const { challengeId, title, difficulty } =
    challenges[randomIndex];

  // Only expose safe metadata — full content (files, requirements)
  // is gated behind an active assessment session via assessmentController.
  res.json({ challengeId, title, difficulty });
>>>>>>> origin/ishikas-15th-sept
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