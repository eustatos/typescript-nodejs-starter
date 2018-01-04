import * as express from "express";
import * as dotenv from "dotenv";

dotenv.config({path: "./.env"});

const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

app.get("/", (req: any, res: any, next: any) => {
    res.send("success");
});

module.exports = app;