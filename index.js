const { Sequelize } = require("sequelize");
const cors = require("cors");
const helmet = require("helmet");
const { Order, User, init } = require("./models/Models");
const routes = require("./routes/routes");
const express = require("express");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite3",
});

const app = express();

(async () => {
  await init(sequelize);

  app.use(cors());
  app.use(helmet());
  app.use(express.json());

  app.get("/", (req, res) => res.send("Ello whoad"));
  app.use("/api/v1/users", routes);
  app.listen(3000);

  //   const Jane = await User.create({
  //     name: "Jane Doe",
  //     email: "user@email.com",
  //     password: "password1234",
  //   });
  //   await Jane.save();
  //   const order = new Order({ orderId: "1F3KLJU7D", UserId: 1 });
  //   await order.save();

  //   const results = await User.findAll({ include: Order });
  //   console.log(JSON.stringify(results, null, 4));
})();
