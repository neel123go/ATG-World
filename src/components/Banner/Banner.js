import React from 'react';
import BannerImg from '../../Images/banner-mobile.png';
import { FiArrowLeft } from 'react-icons/fi';
import { btnStyle, contentContainer, firstContent, lgContainer, smContainer } from './BannerStyle';

const Banner = ({ user, setUser }) => {
    return (
        <>
            {/* Banner for Large Device */}
            <div
                className={lgContainer}
                style={{ backgroundImage: 'url(https://i.ibb.co/1Zsy8CP/banner.png)', height: '58vh' }}
            >
                <div className='text-light position-relative' style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)', height: '58vh' }}>
                    <div className='position-absolute' style={{ left: '200px', bottom: '80px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '700' }}>Computer Engineering</h2>
                        <p style={{ fontSize: '18px', marginTop: '4px' }}>142,765 Computer Engineers follow this</p>
                    </div>
                </div>
            </div>

            {/* Banner for Small Device */}
            <div className={smContainer} style={{ width: '103%', background: 'black', overflow: 'hidden' }}>
                <img src={BannerImg} alt="Five developers at work." style={{ width: '100%', objectFit: 'cover', opacity: 0.4 }} />
                <div className={contentContainer} style={{ width: '100%', height: '100%' }}>
                    <div className={firstContent}>
                        <FiArrowLeft fontSize={30} />

                        {user === '' ? <button type="button" style={{ fontWeight: '500' }} className={btnStyle} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Join Group</button> : <button type="button" style={{ fontWeight: '500' }} className={btnStyle}>Leave Group</button>}

                        {/* <button  >Join Group</button> */}
                    </div>
                    <div className='mx-4 mb-2'>
                        <h2 style={{ fontSize: '22px', fontWeight: '700' }}>Computer Engineering</h2>
                        <p style={{ fontSize: '17px', marginTop: '4px', fontWeight: '400' }}>142,765 Computer Engineers follow this</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;