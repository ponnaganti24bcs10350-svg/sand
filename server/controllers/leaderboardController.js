const User = require("../models/User");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const challenges = require("../challenges/challenges");
>>>>>>> origin/ishikas-15th-sept
=======
>>>>>>> origin/vidya-work
=======
>>>>>>> origin/vidya

// GET LEADERBOARD
// Only student accounts appear on the developer leaderboard.
async function getLeaderboard(req, res) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const totalChallenges = challenges.length;

>>>>>>> origin/ishikas-15th-sept
=======
>>>>>>> origin/vidya-work
=======
>>>>>>> origin/vidya
    const users = await User.find({
      role: "student",
    })
      .select(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        "name javascriptScore reactScore totalSolved"
=======
        "name totalSolved lastChallengeSolvedAt"
>>>>>>> origin/ishikas-15th-sept
=======
        "name javascriptScore reactScore totalSolved"
>>>>>>> origin/vidya-work
=======
        "name javascriptScore reactScore totalSolved"
>>>>>>> origin/vidya
      )
      .lean();

    const sortedUsers = users.sort((a, b) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/vidya-work
=======
>>>>>>> origin/vidya
      const aOverall =
        (a.javascriptScore + a.reactScore) / 2;

      const bOverall =
        (b.javascriptScore + b.reactScore) / 2;

      return bOverall - aOverall;
<<<<<<< HEAD
<<<<<<< HEAD
=======
      if (b.totalSolved !== a.totalSolved) {
        return b.totalSolved - a.totalSolved;
      }
      
      const aTime = a.lastChallengeSolvedAt ? new Date(a.lastChallengeSolvedAt).getTime() : Infinity;
      const bTime = b.lastChallengeSolvedAt ? new Date(b.lastChallengeSolvedAt).getTime() : Infinity;
      
      return aTime - bTime;
>>>>>>> origin/ishikas-15th-sept
=======
>>>>>>> origin/vidya-work
=======
>>>>>>> origin/vidya
    });

    const rankedUsers = sortedUsers.map(
      (user, index) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/vidya-work
=======
>>>>>>> origin/vidya
        const overallScore = Math.round(
          (user.javascriptScore +
            user.reactScore) /
            2
        );

        return {
          rank: index + 1,

          userId: user._id.toString(),

          username: user.name,

          javascriptScore:
            user.javascriptScore,

          reactScore:
            user.reactScore,

          totalSolved:
            user.totalSolved,

          overallScore,
<<<<<<< HEAD
<<<<<<< HEAD
=======
        const mernScore = totalChallenges > 0 
          ? Math.min(Math.round((user.totalSolved / totalChallenges) * 100), 100)
          : 0;

        return {
          rank: index + 1,
          userId: user._id.toString(),
          username: user.name,
          mernScore,
          totalSolved: user.totalSolved,
>>>>>>> origin/ishikas-15th-sept
=======
>>>>>>> origin/vidya-work
=======
>>>>>>> origin/vidya
        };
      }
    );

    return res.json({
      success: true,
      data: rankedUsers,
    });
  } catch (error) {
    console.error(
      "Failed to fetch leaderboard:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch leaderboard",
    });
  }
}

// MANUAL UPDATE
// Kept for future admin functionality.
// Do not expose this endpoint publicly.
async function updateUserScore(req, res) {
  try {
    const {
      userId,
      javascriptScore,
      reactScore,
    } = req.body;

    const user =
      await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (
      javascriptScore !== undefined
    ) {
      user.javascriptScore =
        javascriptScore;
    }

    if (reactScore !== undefined) {
      user.reactScore = reactScore;
    }

    await user.save();

    return res.json({
      success: true,
      message:
        "Score updated successfully",

      data: {
        userId: user._id.toString(),

        username: user.name,

        javascriptScore:
          user.javascriptScore,

        reactScore:
          user.reactScore,

        totalSolved:
          user.totalSolved,

        overallScore: Math.round(
          (user.javascriptScore +
            user.reactScore) /
            2
        ),
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to update score",
    });
  }
}

module.exports = {
  getLeaderboard,
  updateUserScore,
};