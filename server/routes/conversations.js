const router = require("express").Router();
const Conversation = require("../models/Conversation");
const User = require("../models/User");

// new conversation
router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConv = await newConversation.save();
    res.status(200).json(savedConv);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get conversation of a user
router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
