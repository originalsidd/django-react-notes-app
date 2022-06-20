import React from 'react';
import { Link } from 'react-router-dom';

const getTime = (note) => {
    return new Date(note.updated).toLocaleDateString();
};

const getTitle = (note) => {
    let title = note.body.split('\n')[0];
    if (title.length > 40) {
        return title.slice(0, 40);
    }
    return title;
};

const getContent = (note) => {
    let content = note.body.split('\n').slice(1).join(' ');

    if (content.length > 40) {
        return content.slice(0, 40) + '...';
    }
    return content;
};

const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note?.id}`}>
            <div className='notes-list-item'>
                <h3>{getTitle(note)}</h3>
                <p>
                    <span>{getTime(note)}</span>
                    {getContent(note)}
                </p>
            </div>
        </Link>
    );
};

export default ListItem;
