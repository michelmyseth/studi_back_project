const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 2002;
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
    res.send({ users: ["userOne", "userTwo", "userT hree"] });
});

app.listen(5000, () => {
    console.log(`server started on port ${PORT}`);
});
