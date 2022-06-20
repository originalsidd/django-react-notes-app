import React, { useState } from 'react';

const ThemeButton = ({ dark, setDark }) => {
    const changeTheme = () => {
        setDark(!dark);
    };

    return (
        <div className='theme-switch-container'>
            <label className='theme-slider'>
                <input type='checkbox' id='checkbox' onClick={changeTheme} />
                <div className='round slider' />
            </label>
        </div>
    );
};

export default ThemeButton;
