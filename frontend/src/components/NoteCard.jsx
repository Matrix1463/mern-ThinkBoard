import { Link } from 'react-router'
import { PenSquareIcon } from "lucide-react"
import { Trash2Icon } from "lucide-react"
import { formatDate } from '../lib/utils.js'
import axiosInstance from '../lib/axios.js'
import toast from 'react-hot-toast'

const NoteCard = ({note, setNotes}) => {
  const handleDelete = async (e,id) => {
    e.preventDefault(); // Prevents the default action of the link (navigation)

    if(!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }
    try {
      axiosInstance.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      // window.location.reload(); // Reload the page to reflect the deleted note
      // Update the notes state to remove the deleted note
      setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
    } catch (error) {
      console.log("Error in handleDelete:", error);
      toast.error("Failed to delete note");
    }
  }
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#00FF9D]"
    >
        <div className="card-body">
            <h3 className="card-title text-base-content">{note.title}</h3>
            <p className="text-base-content/70 line-clamp-3">{note.content}</p>
            <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-base-content/60">
                    {formatDate(new Date(note.createdAt))}
                </span>
                <div className="flex items-center gap-1">
                    <button className="btn btn-ghost  btn-xs"><PenSquareIcon className="size-4" /></button>
                    <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e, note._id)}>
                        <Trash2Icon className="size-4" />
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard