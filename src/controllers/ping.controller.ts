import { Request, Response } from "express";

export const pingHanlder = (req: Request, res: Response) => {
    // res.status(200).json({ message: "pong" });
    res.send('pong');
}