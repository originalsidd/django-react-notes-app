import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ListItem from '../components/ListItem';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { Link } from 'react-router-dom';

const NotePage = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [note, setNote] = useState();

    useEffect(() => {
        getNote();
    }, [id]);

    const getNote = async () => {
        if (id === 'new') return;

        let response = await fetch(`/api/notes/${id}/`);
        let data = await response.json();
        setNote(data);
    };

    const createNote = async () => {
        let response = await fetch(`/api/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
    };

    const updateNote = async () => {
        fetch(`/api/notes/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
    };

    let deleteNote = async () => {
        fetch(`/api/notes/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        navigate('/');
    };

    const handleSubmit = () => {
        if (note?.body === '' || note === null) {
            // deleteNote();
        } else if (id !== 'new') {
            // updateNote();
        } else if (id === 'new' && note?.body) {
            // createNote();
        }
        navigate('/');
    };

    const handleChange = (value) => {
        setNote({ ...note, body: value });
    };

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {id !== 'new' ? (
                    <button onClick={() => {}}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea
                value={note?.body}
                onChange={(e) => {
                    handleChange(e.target.value);
                }}
            ></textarea>
        </div>
    );
};

export default NotePage;
