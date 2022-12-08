import React, { useState } from 'react';
import './Feed.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdGroupAdd } from 'react-icons/md';

const Feed = () => {
    const [activeItem, setActiveItem] = useState(0);

    return (
        <div style={{ padding: '40px 200px' }}>
            <div>
                <ul className="p-0 m-0 nav nav-tabs">
                    <li>
                        <a onClick={() => setActiveItem(0)} className={activeItem === 0 ? 'active' : 'nav-link text-secondary border-0 pb-3'} href="#">All Posts(32)</a>
                    </li>
                    <li>
                        <a onClick={() => setActiveItem(1)} className={activeItem === 1 ? 'active' : 'nav-link text-secondary border-0 pb-3'} href="#">Article</a>
                    </li>
                    <li>
                        <a onClick={() => setActiveItem(2)} className={activeItem === 2 ? 'active' : 'nav-link text-secondary border-0 pb-3'} href="#">Event</a>
                    </li>
                    <li>
                        <a onClick={() => setActiveItem(3)} className={activeItem === 3 ? 'active' : 'nav-link text-secondary border-0 pb-3'} href="#">Education</a>
                    </li>
                    <li>
                        <a onClick={() => setActiveItem(4)} className={activeItem === 4 ? 'active' : 'nav-link text-secondary border-0 pb-3'} href="#">Job</a>
                    </li>

                    <div className='d-flex gap-3 ms-auto'>
                        <button className='button'>Write a post <AiFillCaretDown fontSize={12} /></button>
                        <button className='button text-light' style={{ backgroundColor: '#2F6CE5' }}><MdGroupAdd className='me-1' fontSize={22} /> Join Group</button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Feed;