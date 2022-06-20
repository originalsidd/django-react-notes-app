import React from 'react';
import ThemeButton from './ThemeButton';

const Header = ({ dark, setDark }) => {
    return (
        <div className='app-header'>
            <h1>Note List</h1>
            <ThemeButton dark={dark} setDark={setDark} />
        </div>
    );
};

export default Header;
