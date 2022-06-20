import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';

const NotesListPage = () => {
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        setLoading(true);
        let response = await fetch('/api/notes/');
        let data = await response.json();
        setNotes(data);
        setLoading(false);
    };

    if (loading) return <div className='loader' />;

    return (
        <div className='notes'>
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782; Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>
            <div className='notes-list'>
                {notes.map((note, index) => (
                    <ListItem note={note} key={index} />
                ))}
            </div>
            <AddButton />
        </div>
    );
};

export default NotesListPage;
