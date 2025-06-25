import { NextFunction, Request, Response } from "express";
import fs from "fs";

// export const pingHanlder = async(req: Request, res: Response) : Promise<void> => {
export const pingHanlder =  (req: Request, res: Response, next: NextFunction) => {
    // res.status(200).json({ message: "pong" });
    // console.log("request body:", req.body);
    // console.log("request query:", req.query);
    // console.log("URL params:", req.params);
    // res.send('pong');

    fs.readFile('nonexistentfile.txt', (err, data) => {
            if (err) {
                // throw new Error("Something went wrong while reading the file: " + err.message);
                next(err); // Pass the error to the next middleware which could be a default error handler
            }
            // console.log("File data:", data.toString());
        });   
    
   
            

    res.status(200).json({
        message: "pong",
        success: true,
        timestamp: new Date().toISOString(),        
    }); 
}