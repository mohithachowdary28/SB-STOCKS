const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const stockRoutes = require("./routes/stockRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "SB Stocks Backend"
  });
});

app.use("/api/users", userRoutes);
app.use("/api/stocks", stockRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});