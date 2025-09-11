import Navbar from '../components/Navbar'
import { useState } from 'react'
import RateLimitedUI from '../components/RateLimitedUI';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import axiosInstance from '../lib/axios.js';
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound';

const HomePage = () => {
    // useStates are used to manage component state in functional components. 
    // Here, we have three states: 
    // isRateLimited to track if the user is rate-limited,
    // notes to store the list of notes fetched from the backend,
    // loading to indicate if the notes are being loaded.
    // State to manage rate limiting and notes
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [notes,setNotes] = useState([]);
    const [loading,setLoading] = useState(true);

    // useEffect to fetch notes from backend
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axiosInstance.get("/notes");
                console.log(res.data);
                setNotes(res.data);
                setIsRateLimited(false); // Successfully fetched notes, so not rate-limited
            } catch (error) {
                console.log("Error fetching notes:");
                console.log(error);
                if(error.response?.status === 429) {
                    setIsRateLimited(true); // If we get a 429 status, we are rate-limited
                }
                else {
                    toast.error("Failed to fetch notes");
                }
            } finally {
                setLoading(false); // Stop loading in both success and error cases
            }
        };

        fetchNotes();
    }, []);

  return (
    <div className="min-h-screen">
        <Navbar />

        {isRateLimited && <RateLimitedUI />}

        <div className="max-w-7xl mx-auto p-4 mt-6">
            {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

            {notes.length === 0 && !loading && !isRateLimited && <NotesNotFound />}

            {notes.length > 0 && !isRateLimited && (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {notes.map(note => (
                        <NoteCard key={note._id} note={note} setNotes={setNotes} />
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default HomePage