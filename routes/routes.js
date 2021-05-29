const router = require("express").Router();
const { User } = require("../models/Models");

router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
