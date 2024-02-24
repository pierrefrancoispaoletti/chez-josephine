const mongoose = require("mongoose");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

mongoose
  ?.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_SERVER}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    console.log("connexion db ok !");
  })
  .catch((err) => console.log(err));
