import React from 'react';
import { MdShare, MdOutlineLocationOn, MdOutlineRemoveRedEye } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';
import { RiCalendarEventFill } from 'react-icons/ri';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { postContainer, postFooter } from '../Feed/FeedStyle';

const Post = () => {
    return (
        <div className='d-flex flex-column gap-3'>

            {/* Article */}

            <div className={postContainer} style={{ borderColor: '#E0E0E0' }}>
                <img src="https://i.ibb.co/tDGtGXc/Rectangle-5.png" style={{ width: '100%' }} alt="" />
                <div className='p-md-3 p-4' style={{ color: '#000000' }}>
                    <h5 style={{ fontSize: '18px' }}>✍️ Article</h5>
                    <div className='d-flex justify-content-between my-3'>
                        <h4 className='fs-5' style={{ width: '80%' }}>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
                        <div className="dropdown">
                            <FiMoreHorizontal style={{ cursor: 'pointer' }} fontSize={25} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                <li><a className="dropdown-item" href="#">Report</a></li>
                                <li><a className="dropdown-item" href="#">Delete</a></li>
                            </ul>
                        </div>
                    </div>
                    <h5 style={{ fontSize: '19px', fontWeight: '400', color: '#5C5C5C' }}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h5>
                    <div className={postFooter} style={{ marginTop: '32px' }}>
                        <div className='d-flex align-items-center'>
                            <img src="https://i.ibb.co/pdq3qC4/Rectangle-3.png" alt="" />
                            <div style={{ marginLeft: '10px' }} className='d-flex mt-lg-0 mt-3 flex-column'>
                                <h5 className='m-0' >Sarthak Kamra</h5>
                                <p className='d-lg-none' style={{ fontWeight: '500', color: '#525252' }}>1.4k views</p>
                            </div>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <div className='d-lg-flex gap-2 mt-2 d-none' style={{ color: '#525252' }}>
                                <MdOutlineRemoveRedEye className='mt-1' fontSize={20} />
                                <p style={{ fontWeight: '500' }}>1.4k views</p>
                            </div>

                            <div className='d-flex gap-2 justify-content-between px-2 align-items-center' style={{ height: '36px', backgroundColor: '#EDEEF0', color: '#2D2D2D' }}>
                                <MdShare fontSize={20} />
                                <div className='d-lg-none d-block'>Share</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education */}

            <div className={postContainer} style={{ borderColor: '#E0E0E0' }}>
                <img src="https://i.ibb.co/ZmSdYpq/Rectangle-5-1.png" style={{ width: '100%' }} alt="" />
                <div className='p-md-3 p-4' style={{ color: '#000000' }}>
                    <h5 style={{ fontSize: '18px' }}>🔬️ Education</h5>
                    <div className='d-flex justify-content-between my-3'>
                        <h4 className='fs-5' style={{ width: '80%' }}>Tax Benefits for Investment under National Pension Scheme launched by Government</h4>
                        <div className="dropdown">
                            <FiMoreHorizontal style={{ cursor: 'pointer' }} fontSize={25} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                <li><a className="dropdown-item" href="#">Report</a></li>
                                <li><a className="dropdown-item" href="#">Delete</a></li>
                            </ul>
                        </div>
                    </div>
                    <h5 style={{ fontSize: '19px', fontWeight: '400', color: '#5C5C5C' }}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h5>
                    <div className={postFooter} style={{ marginTop: '32px' }}>
                        <div className='d-flex align-items-center'>
                            <img src="https://i.ibb.co/BCy7srk/Rectangle-3-1.png" alt="" />
                            <div style={{ marginLeft: '10px' }} className='d-flex mt-lg-0 mt-3 flex-column'>
                                <h5 className='m-0' >Sarthak Kamra</h5>
                                <p className='d-lg-none' style={{ fontWeight: '500', color: '#525252' }}>1.4k views</p>
                            </div>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <div className='d-lg-flex gap-2 mt-2 d-none' style={{ color: '#525252' }}>
                                <MdOutlineRemoveRedEye className='mt-1' fontSize={20} />
                                <p style={{ fontWeight: '500' }}>1.4k views</p>
                            </div>

                            <div className='d-flex gap-2 justify-content-between px-2 align-items-center' style={{ height: '36px', backgroundColor: '#EDEEF0', color: '#2D2D2D' }}>
                                <MdShare fontSize={20} />
                                <div className='d-lg-none d-block'>Share</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meetup */}

            <div className={postContainer} style={{ borderColor: '#E0E0E0' }}>
                <img src="https://i.ibb.co/Dg4K8H2/Rectangle-5-2.png" style={{ width: '100%' }} alt="" />
                <div className='p-md-3 p-4' style={{ color: '#000000' }}>
                    <h5 style={{ fontSize: '18px' }}>🗓️ Meetup</h5>
                    <div className='d-flex justify-content-between my-3'>
                        <h4 className='fs-5' style={{ width: '80%' }}>Finance & Investment Elite Social Mixer @Lujiazui</h4>
                        <div className="dropdown">
                            <FiMoreHorizontal style={{ cursor: 'pointer' }} fontSize={25} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                <li><a className="dropdown-item" href="#">Report</a></li>
                                <li><a className="dropdown-item" href="#">Delete</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='d-flex gap-5'>
                        <span className='d-flex gap-2'>
                            <RiCalendarEventFill className='mt-1' fontSize={18} />
                            <p style={{ color: '#000000', fontWeight: '500', fontSize: '15px' }}>Fri, 12 Oct, 2018</p>
                        </span>
                        <span className='d-flex gap-2'>
                            <MdOutlineLocationOn className='mt-1' fontSize={18} />
                            <p style={{ color: '#000000', fontWeight: '500', fontSize: '15px' }}>Ahmedabad, India</p>
                        </span>
                    </div>

                    <button className='py-2 bg-transparent' style={{ color: '#E56135', width: '100%', fontWeight: '600', borderRadius: '8px', border: '0.7px solid #A9AEB8', outline: 'none' }}>Visit Website</button>

                    <div className={postFooter} style={{ marginTop: '32px' }}>
                        <div className='d-flex align-items-center'>
                            <img src="https://i.ibb.co/5FRgvKv/Rectangle-3-2.png" alt="" />
                            <div style={{ marginLeft: '10px' }} className='d-flex mt-lg-0 mt-3 flex-column'>
                                <h5 className='m-0' >Sarthak Kamra</h5>
                                <p className='d-lg-none' style={{ fontWeight: '500', color: '#525252' }}>1.4k views</p>
                            </div>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <div className='d-lg-flex gap-2 mt-2 d-none' style={{ color: '#525252' }}>
                                <MdOutlineRemoveRedEye className='mt-1' fontSize={20} />
                                <p style={{ fontWeight: '500' }}>1.4k views</p>
                            </div>

                            <div className='d-flex gap-2 justify-content-between px-2 align-items-center' style={{ height: '36px', backgroundColor: '#EDEEF0', color: '#2D2D2D' }}>
                                <MdShare fontSize={20} />
                                <div className='d-lg-none d-block'>Share</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job */}

            <div className={postContainer} style={{ borderColor: '#E0E0E0' }}>
                <div className='p-md-3 p-4' style={{ color: '#000000' }}>
                    <h5 style={{ fontSize: '18px' }}>💼️ Job</h5>
                    <div className='d-flex justify-content-between my-3'>
                        <h4 className='fs-5' style={{ width: '80%' }}>Software Developer</h4>
                        <div className="dropdown">
                            <FiMoreHorizontal style={{ cursor: 'pointer' }} fontSize={25} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                <li><a className="dropdown-item" href="#">Report</a></li>
                                <li><a className="dropdown-item" href="#">Delete</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='d-flex gap-4'>
                        <span className='d-flex gap-2'>
                            <HiOutlineBriefcase className='mt-1' fontSize={18} />
                            <p style={{ color: '#000000', fontWeight: '500', fontSize: '15px' }}>Innovaccer Analytics Private Ltd.</p>
                        </span>
                        <span className='d-flex gap-2'>
                            <MdOutlineLocationOn className='mt-1' fontSize={18} />
                            <p style={{ color: '#000000', fontWeight: '500', fontSize: '15px' }}>Noida, India</p>
                        </span>
                    </div>

                    <button className='py-2 bg-transparent' style={{ color: '#02B875', width: '100%', fontWeight: '600', borderRadius: '8px', border: '0.7px solid #A9AEB8', outline: 'none' }}>Apply on Timesjobs</button>

                    <div className={postFooter} style={{ marginTop: '32px' }}>
                        <div className='d-flex align-items-center'>
                            <img src="https://i.ibb.co/YP6MjqF/Rectangle-3-3.png" alt="" />
                            <div style={{ marginLeft: '10px' }} className='d-flex mt-lg-0 mt-3 flex-column'>
                                <h5 className='m-0' >Sarthak Kamra</h5>
                                <p className='d-lg-none' style={{ fontWeight: '500', color: '#525252' }}>1.4k views</p>
                            </div>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <div className='d-lg-flex gap-2 mt-2 d-none' style={{ color: '#525252' }}>
                                <MdOutlineRemoveRedEye className='mt-1' fontSize={20} />
                                <p style={{ fontWeight: '500' }}>1.4k views</p>
                            </div>

                            <div className='d-flex gap-2 justify-content-between px-2 align-items-center' style={{ height: '36px', backgroundColor: '#EDEEF0', color: '#2D2D2D' }}>
                                <MdShare fontSize={20} />
                                <div className='d-lg-none d-block'>Share</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;