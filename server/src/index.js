require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");

const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "static")));
app.use(fileUpload({}));
app.use(cors());
app.use("/api", router);
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started at port ${PORT}! Pid: ${process.pid}`));
    } catch (e) {
        console.error(e);
    }
};

start();