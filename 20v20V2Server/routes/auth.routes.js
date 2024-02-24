const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.post("/login", function (req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    try {
      if (err || !user) {
        return res.json({
          err,
          info,
          status: 401,
          message: "L'email ou le mot de passe est invalide",
        });
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email, role: user.role };
        const token = jwt.sign({ user: body }, process.env.SECRET_KEY);
        return res.status(200).json({
          status: 200,
          role: user.role,
          token,
          message: "Connécté",
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        status: 404,
        message: "Mot de passe ou email invalide",
      });
    }
  })(req, res, next);
});

module.exports = router;
