const Post = require("../models/Post");
const User = require("../models/User");

async function getPosts(req, res) {
  try {
<<<<<<< HEAD
    const page = Math.max(
      parseInt(req.query.page, 10) || 1,
      1
    );

    const limit = Math.min(
      parseInt(req.query.limit, 10) || 20,
      100
    );

=======
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100);
>>>>>>> origin/vidya-work
    const skip = (page - 1) * limit;

    // Intentionally inefficient implementation.
    // The candidate must investigate why this becomes slow
    // with a large dataset.
<<<<<<< HEAD
    const posts = await Post.find({
      status: "published",
    })
=======
    const posts = await Post.find({ status: "published" })
>>>>>>> origin/vidya-work
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const result = [];

    for (const post of posts) {
      const author = await User.findById(post.authorId).lean();
<<<<<<< HEAD

=======
>>>>>>> origin/vidya-work
      result.push({
        id: post._id,
        title: post.title,
        content: post.content,
        tags: post.tags,
        createdAt: post.createdAt,
        author: author
<<<<<<< HEAD
          ? {
              id: author._id,
              name: author.name,
              avatar: author.avatar,
            }
=======
          ? { id: author._id, name: author.name, avatar: author.avatar }
>>>>>>> origin/vidya-work
          : null,
      });
    }

<<<<<<< HEAD
    // Additional unnecessary database work.
    const total = await Post.countDocuments({
      status: "published",
    });
=======
    const total = await Post.countDocuments({ status: "published" });
>>>>>>> origin/vidya-work

    return res.status(200).json({
      data: result,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error(error);
<<<<<<< HEAD

    return res.status(500).json({
      message: "Failed to retrieve posts",
    });
  }
}

module.exports = {
  getPosts,
};
=======
    return res.status(500).json({ message: "Failed to retrieve posts" });
  }
}

module.exports = { getPosts };
>>>>>>> origin/vidya-work
