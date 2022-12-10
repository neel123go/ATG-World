import React, { useRef, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import AccountImage from '../../Images/create-account-image.png';
import SignIn from './SignIn';

const JoinGroupModal = ({ user, setUser }) => {
    const [error, setError] = useState('');
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password === confirmPassword) {
            await setUser({
                firstName,
                lastName,
                email,
                password
            });
        } else {
            setError("Password doesn't match");
        }
    }

    return (
        <>
            <div className="modal mt-5 fade overflow-hidden" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                <div className="modal-dialog mt-5 mt-md-0 modal-lg modal-dialog-centered mx-auto">
                    <div className="modal-content mt-5 mt-md-0 position-relative" style={{ borderRadius: '8px' }}>
                        <RxCross2 className='p-1 position-absolute d-none d-md-block end-0 bg-light rounded-circle' style={{ top: '-40px', width: '24px', height: '24px', cursor: 'pointer' }} data-bs-dismiss="modal" aria-label="Close" />
                        <div className="modal-header text-center py-2 d-none d-md-block" style={{ backgroundColor: '#EFFFF4' }}>
                            <h5 className='text-success mt-1 mx-auto' style={{ fontSize: '14px' }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
                        </div>
                        <div className="modal-body p-4">
                            <div className='d-flex justify-content-between mb-3'>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#000000' }}>Create Account</h3>
                                <RxCross2 className='p-1 d-md-none d-block position-absolute bg-dark text-light rounded-circle' style={{ width: '24px', right: '20px', height: '24px', cursor: 'pointer' }} data-bs-dismiss="modal" aria-label="Close" />
                                <p className='mt-2 d-none d-md-block' style={{ fontSize: '13px', color: '#3D3D3D', fontWeigth: '400' }}>Already have an account? <span data-bs-target="#staticBackdropSignIn" data-bs-toggle="modal" data-bs-dismiss="modal" style={{ color: '#2F6CE5', cursor: 'pointer' }}>Sign In</span></p>
                            </div>

                            <div className='d-flex gap-4 justify-content-between align-items-center'>
                                <div style={{ width: '100%' }}>
                                    <form onSubmit={handleLogin}>
                                        <p className='text-danger'>{error}</p>
                                        <div className="mb-3">
                                            <div className="input-group">
                                                <input type="text" className="form-control rounded-0" ref={firstNameRef} placeholder='First Name' required />
                                                <input type="text" className="form-control rounded-0" ref={lastNameRef} placeholder='Last Name' required />
                                            </div>

                                            <input type="email" className="form-control rounded-0" placeholder='Email' aria-describedby="emailHelp" ref={emailRef} required />

                                            <div className="mb-3">
                                                <input type="password" className="form-control rounded-0" ref={passwordRef} placeholder='Password' required />
                                                <input type="password" className="form-control rounded-0" ref={confirmPasswordRef} placeholder='Confirm Password' required />
                                            </div>
                                        </div>

                                        <div className='d-md-grid gap-2 d-flex'>
                                            <button type="submit" className="text-light rounded-pill my-md-2 my-4 border-0 py-2 px-md-0 px-5" style={{ backgroundColor: '#2F6CE5' }}>Create Account</button>
                                            <p data-bs-target="#staticBackdropSignIn" data-bs-toggle="modal" data-bs-dismiss="modal" style={{ color: '#495057', cursor: 'pointer', fontWeight: '600' }} className='my-md-2 my-4 d-md-none d-block end-0 position-absolute me-4'>or, Sign In</p>
                                        </div>
                                        <button type="button" className="text-dark bg-transparent rounded-3 my-2 py-2" style={{ width: '100%', border: '0.6px solid #D9D9DB', fontSize: '14px', fontWeight: '600' }}><FaFacebook style={{ marginRight: '10px' }} fontSize={20} fill="#1877F2" /> Sign up with Facebook</button>
                                        <button type="button" className="text-dark bg-transparent rounded-3 my-2 py-2" style={{ width: '100%', border: '0.6px solid #D9D9DB', fontSize: '14px', fontWeight: '600' }}><FcGoogle style={{ marginRight: '10px' }} fontSize={20} /> Sign up with Google</button>

                                        <p className='mt-4 text-center' style={{ fontSize: '12px' }}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </form>
                                </div>
                                <div style={{ width: '100%' }} className="d-md-flex d-none flex-column justify-content-between">
                                    <img src={AccountImage} style={{ width: '90%' }} alt="" />
                                    <p className='mt-4' style={{ fontSize: '10px' }}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SignIn user={user} setUser={setUser} />
        </>
    );
};

export default JoinGroupModal;