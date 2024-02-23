const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/task.routes");

const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://sutartushar2001:fGFNNMSuYEfjTM88@tushar.jfmj8wz.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log(`connected with DB :)`))
  .catch((error) => console.log(`connection failed${error}`));

// Routes
app.use("/task", taskRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
