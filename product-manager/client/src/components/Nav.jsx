import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className='navbar text-bg-info p-2 d-flex justify-content-between align-items-center'>
            <div className=''>
                <h1>Product Manager</h1>
            </div>

            <div>
                <Link to={'/'}>Home</Link>
            </div>
        </div>
)}

export default Nav;