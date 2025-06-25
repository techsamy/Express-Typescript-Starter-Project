import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validateRequestBody = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);
            console.log("Request body is valid");
            next();
        } catch (error) {
            // if the validation fails
            res.status(400).json({
                message: "Invalid request body",
                success: false,
                error: error
            });
        }
    };
};

export const validateQueryParams = (schema: AnyZodObject) => {  
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.query);
            console.log("Query parameters are valid");
            next();
        } catch (error) {
            // if the validation fails
            return res.status(400).json({
                message: "Invalid query parameters",
                success: false,
                error: error
            });
        }
    };
}