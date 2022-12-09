import React, { useState } from 'react';
import './Feed.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdGroupAdd, MdOutlineLocationOn, MdEdit } from 'react-icons/md';
import { postsContainer, tabLink } from './FeedStyle';
import Post from '../Post/Post';
import CreateAccount from '../Modal/CreateAccount';

const Feed = ({ user, setUser }) => {
    const [activeItem, setActiveItem] = useState(0);

    return (
        <div style={{ padding: '40px 200px' }}>
            <ul className="p-0 m-0 nav nav-tabs">
                <li>
                    <a onClick={() => setActiveItem(0)} className={activeItem === 0 ? 'active' : `${tabLink}`} href="#">All Posts(32)</a>
                </li>
                <li>
                    <a onClick={() => setActiveItem(1)} className={activeItem === 1 ? 'active' : `${tabLink}`} href="#">Article</a>
                </li>
                <li>
                    <a onClick={() => setActiveItem(2)} className={activeItem === 2 ? 'active' : `${tabLink}`} href="#">Event</a>
                </li>
                <li>
                    <a onClick={() => setActiveItem(3)} className={activeItem === 3 ? 'active' : `${tabLink}`} href="#">Education</a>
                </li>
                <li>
                    <a onClick={() => setActiveItem(4)} className={activeItem === 4 ? 'active' : `${tabLink}`} href="#">Job</a>
                </li>

                <div className='d-flex gap-3 ms-auto'>
                    <button className='buttonStyle'>Write a post <AiFillCaretDown fontSize={12} /></button>
                    {user === '' ? <button type="button" style={{ backgroundColor: '#2F6CE5' }} className="buttonStyle text-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><MdGroupAdd className='me-1' fontSize={22} />Join Group</button> : <button type="button" style={{ backgroundColor: '#fff', border: '1px solid #6A6A6B', color: '#6A6A6B' }} className="buttonStyle"><MdGroupAdd className='me-1' fontSize={22} />Leave Group</button>}
                </div>
            </ul>

            {/* All Posts */}
            <div className={postsContainer} style={{ width: '100%' }}>

                {/* Post */}

                <Post />

                <div style={{ width: '40%' }}>
                    <div className="input-group mb-3 d-flex justify-content-end align-items-center">
                        <MdOutlineLocationOn fontSize={20} style={{ marginRight: '-17px', zIndex: '10' }} />
                        <input type="text" className="border-bottom inputStyle px-4 text-dark border-0 rounded-0 py-2" defaultValue="Noida, India" />
                        <MdEdit fontSize={20} style={{ marginLeft: '-17px', zIndex: '10' }} />
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <CreateAccount user={user} setUser={setUser} />
        </div>
    );
};

export default Feed;