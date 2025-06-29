import express from "express";
import { ServerConfig } from "./config";

import v1Router from "./routers/v1/index.router";
import v2Router from "./routers/v2/index.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 
    * Registering the ping router and their corresponding routes with out app server object.
*/
// app.use('/ping',pingRouter);

app.use('/api/v1',v1Router);
app.use('/api/v2',v2Router);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server running on port ${ServerConfig.PORT}`);
    console.log(`Press Ctrl+C to stop the server.`);

    /* const obj = {
        name: "Narayan",
        age: 29,
        location: "Delhi"
    };

    const objSchema = z.object({
        name: z.string(),
        age: z.number().int().positive(),
        location: z.string()
    });

    console.log(objSchema.parse(obj)); */
}); 