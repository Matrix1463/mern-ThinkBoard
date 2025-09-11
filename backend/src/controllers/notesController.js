import Note from "../models/Note.js";


export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({createdAt: -1}); // -1 will sort in descending order (newest first)
        res.status(200).json(notes);
    }
    catch (error) {
        // for debug purposes
        console.error("Error in getAllNotes controller", error);

        res.status(500).json({message:"Server Error"})
    }
}

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if(!note) {
            return res.status(404).json({message:"Note not found"});
        }
        res.status(200).json(note);
    }
    catch (error) {
        // for debug purposes
        console.error("Error in getAllNotes controller", error);

        res.status(500).json({message:"Server Error"})
    }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content})

        const savedNote = await note.save();
        res.status(201).json(savedNote);

    } catch (error) {
        // for debug purposes
        console.error("Error in createNote controller", error);

        res.status(500).json({message:"Server Error"})
    }

}

export async function updateNote(req, res) {
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new:true})
        if(!updatedNote) {
            return res.status(404).json({message:"Note not found"});
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        // for debug purposes
        console.error("Error in updateNote controller", error);

        res.status(500).json({message:"Server Error"})
    }
}

export async function deleteNote(req, res) {
    try {
        const {title, content} = req.body;
        const deletedNote = await Note.findByIdAndDelete(req.params.id, {title, content}, {new:true})
        if(!deletedNote) {
            return res.status(404).json({message:"Note not found"});
        }

        res.status(200).json({message: "Note deleted successfully"});
        // res.status(200).json(deletedNote);
    } catch (error) {
        // for debug purposes
        console.error("Error in updateNote controller", error);

        res.status(500).json({message:"Server Error"})
    }
}