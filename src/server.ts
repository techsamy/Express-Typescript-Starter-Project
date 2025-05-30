import express from "express";
import { ServerConfig } from "./config";
import { createPingRouter } from "./routers/ping.router";

const app = express();

createPingRouter(app);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server running on port ${ServerConfig.PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
}); 