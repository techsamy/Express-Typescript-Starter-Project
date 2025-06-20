import express from "express";
import { ServerConfig } from "./config";

import v1Router from "./routers/v1/index.router";
import v2Router from "./routers/v2/index.router";

const app = express();

/* 
    * Registering the ping router and their corresponding routes with out app server object.
*/
// app.use('/ping',pingRouter);

app.use('/api/v1',v1Router);
app.use('/api/v2',v2Router);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server running on port ${ServerConfig.PORT}`);
    console.log(`Press Ctrl+C to stop the server.`);
}); 