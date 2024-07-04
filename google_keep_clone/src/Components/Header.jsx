import React from 'react';
import keepLogo from '../Images/keep.png'; 

const Header = () => {
    return (
        <div className='header'>
            <img src={keepLogo} alt='logo'  className='logo' />
            <h1 style={{marginLeft : '37%', fontFamily:"cursive"}}>Task Keeper</h1>
        </div>
    );
}

export default Header;
