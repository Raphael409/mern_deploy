const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connection successful!"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

const port = process.env.PORT || 8800
app.listen(port, () => {
    console.log("backend server is running");
});
