import mongoose from "mongoose";

// 1 - Create a schema
const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    content: {
        type:String,
        required: true
    },
    
}, 
{timestamps: true} // Automatically manage createdAt and updatedAt fields
);

// 2 - Create a model based on the schema
const Note = mongoose.model("Note", noteSchema);

// 3 - Export the model
export default Note;