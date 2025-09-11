import express from "express";
import { createNote, getNoteById, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const router = express.Router();

//  what is an Endpoint?
// An endpoint is a combination of a URL + HTTP method that lets the client
// interact with a specific resource.

// This is a route 
// This is specifically a get request to retrieve everything
// from the server
router.get("/", getAllNotes);

// This is a route 
// This is specifically a get request to retrieve something
// from the server
router.get("/:id", getNoteById);

// This is a post request to create something
// on the server
router.post("/", createNote);

// This is a put request to update something
// on the server
router.put("/:id", updateNote);

// This is a delete request to delete something
// on the server
router.delete("/:id", deleteNote);

export default router;