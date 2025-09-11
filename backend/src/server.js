import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve(); // Get the current directory name


// Middleware 
if(process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173" // your frontend URL
        })
    ); // Enable CORS for all routes
}
app.use(express.json());
app.use(rateLimiter)



// middleware to log request method and URL
// This is useful for debugging and monitoring purposes
// app.use((req,res,next) => {
//     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//     next();
// });


// Routes
app.use("/api/notes", notesRoutes) // Mount the notes routes at /api/notes

if(process.env.NODE_ENV === "production") {
    // Serve static files from the React frontend app
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
    });
}


// It's best practice to connect to the database first
// before starting the server to ensure that the app
// only starts if the database connection is successful.

// Connect to the database
connectDB().then(() => {
    // Start the server
    app.listen(PORT, () => {
        console.log("Server is running on PORT", PORT);
    });
})
