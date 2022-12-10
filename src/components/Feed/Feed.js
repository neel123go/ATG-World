import React, { useState } from 'react';
import './Feed.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdGroupAdd, MdOutlineLocationOn, MdEdit, MdOutlineModeEditOutline } from 'react-icons/md';
import { TbAlertCircle } from 'react-icons/tb';
import { BiLike } from 'react-icons/bi';
import { postsContainer, tabLink } from './FeedStyle';
import Post from '../Post/Post';
import CreateAccount from '../Modal/CreateAccount';

const Feed = ({ user, setUser }) => {
    const [activeItem, setActiveItem] = useState(0);
    const [follow1, setFollow1] = useState(false);
    const [follow2, setFollow2] = useState(false);
    const [follow3, setFollow3] = useState(false);
    const [follow4, setFollow4] = useState(false);

    return (
        <div className='py-md-5 py-4 container-lg px-0 px-lg-4'>
            <ul className="px-4 nav d-lg-none d-flex align-items-center justify-content-between">
                <li>
                    <h4 className='fw-bolder mt-2'>Posts(364)</h4>
                </li>

                <select className='px-3 py-2 border-0 rounded-3 fs-5' style={{ backgroundColor: '#F1F3F5' }}>
                    <option selected className='px-2 fs-6'>Filter: All</option>
                    <option className='fs-6' value="1">Article</option>
                    <option className='fs-6' value="2">Event</option>
                    <option className='fs-6' value="3">Education</option>
                    <option className='fs-6' value="4">Job</option>
                </select>
            </ul>

            <ul className="p-0 m-0 nav nav-tabs d-none d-lg-flex">
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
            <div className={postsContainer}>

                {/* Post */}
                <div class="row justify-content-between">
                    <div class="col-lg-7 col-12 p-0 m-0">
                        <Post />
                    </div>
                    <div class="col-xl-3 col-lg-4 col-0 d-none d-lg-block">
                        <div>
                            <div className="input-group d-flex justify-content-start align-items-center" style={{ width: '100%', marginBottom: '34px' }}>
                                <MdOutlineLocationOn fontSize={20} style={{ marginRight: '-17px', zIndex: '10' }} />
                                <input style={{ width: '98%' }} placeholder='Enter your location' disabled={!user} type="text" className="border-bottom bg-transparent inputStyle px-4 text-dark border-0 rounded-0 py-2" defaultValue="Noida, India" />
                                <MdEdit fontSize={20} style={{ marginLeft: '-17px', zIndex: '10' }} />
                            </div>

                            <div className='d-flex gap-2'>
                                <TbAlertCircle fontSize={25} color="#939393" />
                                <p style={{ fontSize: '14px', fontWeight: '400', color: '#939393' }}>Your location will help us serve better and extend a personalised experience.</p>
                            </div>

                            {user && <div className='mt-5'>
                                <h3 className='uppercase' style={{ fontSize: '17px' }}><BiLike fontSize={20} className="mb-2" /> Recommended Groups</h3>
                                <div className='d-flex py-3 flex-column '>
                                    <div className='d-flex justify-content-between align-items-center py-3'>
                                        <div className='d-flex gap-3 align-items-center'>
                                            <img src="https://i.ibb.co/pdq3qC4/Rectangle-3.png" style={{ width: '35px' }} alt="" />
                                            <h4 style={{ fontSize: '16px' }}>Leisure</h4>
                                        </div>
                                        <div>
                                            <button style={{ backgroundColor: follow1 ? '#000000' : '', color: follow1 ? '#fff' : '#000' }} onClick={() => setFollow1(!follow1)} className='border-0 px-3 py-1 rounded-pill'>{follow1 ? 'Followed' : 'Follow'}</button>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center py-3'>
                                        <div className='d-flex gap-3 align-items-center'>
                                            <img src="https://i.ibb.co/BCy7srk/Rectangle-3-1.png" style={{ width: '35px' }} alt="" />
                                            <h4 style={{ fontSize: '16px' }}>Activism</h4>
                                        </div>
                                        <div>
                                            <button style={{ backgroundColor: follow2 ? '#000000' : '', color: follow2 ? '#fff' : '#000' }} onClick={() => setFollow2(!follow2)} className='border-0 px-3 py-1 rounded-pill'>{follow2 ? 'Followed' : 'Follow'}</button>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center py-3'>
                                        <div className='d-flex gap-3 align-items-center'>
                                            <img src="https://i.ibb.co/5FRgvKv/Rectangle-3-2.png" style={{ width: '35px' }} alt="" />
                                            <h4 style={{ fontSize: '16px' }}>MBA</h4>
                                        </div>
                                        <div>
                                            <button style={{ backgroundColor: follow3 ? '#000000' : '', color: follow3 ? '#fff' : '#000' }} onClick={() => setFollow3(!follow3)} className='border-0 px-3 py-1 rounded-pill'>{follow3 ? 'Followed' : 'Follow'}</button>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center py-3'>
                                        <div className='d-flex gap-3 align-items-center'>
                                            <img src="https://i.ibb.co/YP6MjqF/Rectangle-3-3.png" style={{ width: '35px' }} alt="" />
                                            <h4 style={{ fontSize: '16px' }}>Philosophy</h4>
                                        </div>
                                        <div>
                                            <button style={{ backgroundColor: follow4 ? '#000000' : '', color: follow4 ? '#fff' : '#000' }} onClick={() => setFollow4(!follow4)} className='border-0 px-3 py-1 rounded-pill'>{follow4 ? 'Followed' : 'Follow'}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>

            <div className='rounded-circle d-flex justify-content-center align-items-center d-md-none position-fixed' style={{ background: 'linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%)', width: '55px', height: '55px', right: '18px', bottom: '18px' }}>
                <MdOutlineModeEditOutline fill="#fff" fontSize={30} />
            </div>

            {/* <!-- Modal --> */}
            <CreateAccount user={user} setUser={setUser} />
        </div>
    );
};

export default Feed;