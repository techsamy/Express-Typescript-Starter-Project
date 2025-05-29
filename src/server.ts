import express from "express";
import { ServerConfig } from "./config";
const app = express();
// const PORT = process.env.PORT || 3000; 

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(ServerConfig.PORT, () => {
    console.log(`Server running on port ${ServerConfig.PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
}); 