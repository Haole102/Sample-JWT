const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class AuthController {
  constructor() {}

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }
      const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
          email: user.email,
          profilePicture: user.profilePicture,
        },
        process.env.TOKEN_SECRET,
        { expiresIn: "1h" },
      );
      res.json({ token });
    } catch (err) {
      console.log(err);
    }
  }

  async register(req, res) {
    const { username, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 12);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
      bio: "",
      profilePicture: "",
    });

    await newUser.save();
    res.json({ message: "User registered successfully" });
  }
}

module.exports = new AuthController();
