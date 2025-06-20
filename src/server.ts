import express from "express";
import { ServerConfig } from "./config";
import pingRouter from "./routers/ping.router";

const app = express();

/* 
    * Registering the ping router and their corresponding routes with out app server object.
*/
app.use('/ping',pingRouter);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server running on port ${ServerConfig.PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
}); 