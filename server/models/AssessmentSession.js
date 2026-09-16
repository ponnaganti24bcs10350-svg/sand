const mongoose = require("mongoose");

const assessmentSessionSchema = new mongoose.Schema(
  {
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    challenge: {
      type: String,
      required: true,
    },

    startedAt: {
      type: Date,
      required: true,
    },

    submittedAt: {
      type: Date,
      default: null,
    },

    status: {
      type: String,
      enum: ["active", "submitted"],
      default: "active",
    },

    integrityScore: {
      type: Number,
      default: 100,
    },

<<<<<<< HEAD
=======
    lockedUntil: {
      type: Date,
      default: null,
    },

>>>>>>> origin/ishikas-15th-sept
    events: [
      {
        type: {
          type: String,
          enum: [
            "tab_switch",
            "fullscreen_exit",
            "copy",
            "paste",
            "cut",
            "right_click",
            "shortcut",
            "window_blur",
            "multiple_session",
<<<<<<< HEAD
=======
            "screen_share_stopped",
            "webcam_stopped",
>>>>>>> origin/ishikas-15th-sept
          ],
        },

        timestamp: {
          type: Date,
          default: Date.now,
        },

        metadata: {
          type: mongoose.Schema.Types.Mixed,
          default: {},
        },
      },
    ],
  },
   {
    timestamps: true,
  }
);

assessmentSessionSchema.index(
<<<<<<< HEAD
  { candidate: 1, status: 1 },
=======
  { candidate: 1, challenge: 1, status: 1 },
>>>>>>> origin/ishikas-15th-sept
  {
    unique: true,
    partialFilterExpression: {
      status: "active",
    },
  }
);

module.exports = mongoose.model(
  "AssessmentSession",
  assessmentSessionSchema
);