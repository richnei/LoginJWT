const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userController = {
  register: async function (req, res) {
    const selectedUser = await User.findOne({ email: req.body.email });
    if (selectedUser) return res.status(400).send("Email already exist");
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });

    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  },
    login: async function login(req, res) {
        const selectedUser = await User.findOne({ email: req.body.email });
        if (!selectedUser)
        return res.status(400).send("Email or Password incorrect");

        const passwordAndUserMatch = bcrypt.compareSync(
        req.body.password,
        selectedUser.password
        );

        if (!passwordAndUserMatch)
        return res.status(400).send("Email or Password incorrect");

        res.send("User Logged");
    },
};

module.exports = userController;
