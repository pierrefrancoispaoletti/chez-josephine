const express = require("express");
const passport = require("passport");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("./database");
const auth = require("./routes/auth.routes");
const verify = require("./routes/verifytoken.routes");
const products = require("./routes/products.routes");
const User = require("./database/models/User");
const compression = require("compression");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

require("./passport");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(cors());
app.use(compression());

app.use("/auth", auth);
app.use("/verify", verify);
app.use("/api/products", products);

app.post("/bcrypt", async (req, res) => {
  const { email, password } = req.body;

  if (!password) {
    return res.json({ message: "Un mot de passe est necessaire" });
  }

  const hashed = await bcrypt.hash(password, 10);
  let user = await User.findByIdAndUpdate(
    { _id: process.env.ID },
    { email, password: hashed },
    { new: true, upsert: true }
  );
  if (user) {
    return res.json({ user });
  }
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
