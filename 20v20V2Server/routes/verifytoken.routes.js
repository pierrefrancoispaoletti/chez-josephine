const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded) {
      return res.status(200).json({
        user: { token: token, role: decoded.user.role },
        valid: true,
        message: "Re-connécté",
      });
    }
  } catch (error) {
    return res.status(200).json({
      message: "Déconnécté, le token d'authentification n'est plus valide",
      valid: false,
    });
  }
});

module.exports = router;
