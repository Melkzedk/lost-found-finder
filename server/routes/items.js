const router = require("express").Router();
const Item = require("../models/Item");
const auth = require("../middleware/auth");

// create item
router.post("/", auth, async (req, res) => {
  const item = await Item.create({ ...req.body, user: req.user.id });
  res.json(item);
});

// get all items
router.get("/", async (req, res) => {
  const items = await Item.find().sort({ date: -1 });
  res.json(items);
});

// get single item
router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

module.exports = router;
