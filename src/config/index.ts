// This file contains all the basics configuration logic for the app server to work
import dotenv from "dotenv";

type ServerConfig = {
    PORT: number; 
}

export function loadEnv(){
    dotenv.config();
    console.log("Environment variables loaded");
}

loadEnv(); // Load environment variables

export const ServerConfig = {
    PORT: Number(process.env.PORT) || 3001, // Default to 3000 if not set
}