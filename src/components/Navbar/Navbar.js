import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaSquareFull } from 'react-icons/fa';
import { BsFillCircleFill, BsTriangleFill } from 'react-icons/bs';
import Logo from '../../Images/logo.png';
import { navbarSty, containerLgSty, containerSmSty, searchInput } from './NavbarStyle';

const Header = () => {
    return (
        <Navbar expand="lg" className={navbarSty}>
            <Container fluid className={containerLgSty}>
                <Navbar.Brand href="#">
                    <img src={Logo} alt="" className='img-fluid' style={{ width: '180px' }} />
                </Navbar.Brand>
                <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-center' >
                    <AiOutlineSearch fontSize={20} style={{ marginRight: '-37px', zIndex: '10' }} />
                    <Form>
                        <Form.Control
                            type="search"
                            placeholder="Search for your favorite groups in ATG"
                            className={searchInput}
                            aria-label="Search"
                            style={{ width: '360px', backgroundColor: '#F2F2F2' }}
                        />
                    </Form>
                </Navbar.Collapse>
                <h5 style={{ color: '#2E2E2E', fontSize: '16px' }}>Create account.<span style={{ color: '#2F6CE5' }}>It's free!</span> <IoMdArrowDropdown fontSize={20} /></h5>
            </Container>

            <Container fluid className={containerSmSty}>
                <FaSquareFull fontSize={20} fill="#868E96" />
                <BsFillCircleFill fontSize={20} fill="#868E96" />
                <BsTriangleFill fontSize={20} fill="#868E96" />
            </Container>
        </Navbar>
    );
};

export default Header;