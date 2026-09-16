const User = require("../models/User");
=======
>>>>>>> origin/vidya-work
=======
>>>>>>> origin/vidya

// GET LEADERBOARD
// Only student accounts appear on the developer leaderboard.
async function getLeaderboard(req, res) {
  try {
=======
>>>>>>> origin/vidya-work
=======
>>>>>>> origin/vidya
    const users = await User.find({
      role: "student",
    })
      .select(
=======
        "name javascriptScore reactScore totalSolved"
>>>>>>> origin/vidya-work
=======
        "name javascriptScore reactScore totalSolved"
>>>>>>> origin/vidya
      )
      .lean();

    const sortedUsers = users.sort((a, b) => {
=======
>>>>>>> origin/vidya
      const aOverall =
        (a.javascriptScore + a.reactScore) / 2;

      const bOverall =
        (b.javascriptScore + b.reactScore) / 2;

      return bOverall - aOverall;
=======
>>>>>>> origin/vidya-work
=======
>>>>>>> origin/vidya
    });

    const rankedUsers = sortedUsers.map(
      (user, index) => {
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