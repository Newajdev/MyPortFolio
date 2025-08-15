import React from 'react';
import DeshboardHome from './DeshboardHome';
import Container from '../Container';
import { Outlet } from 'react-router-dom';
import DeshboardNavbar from './DeshboardNavbar';

const DeshboardLayout = () => {
    return (
        <div>
            <Container>
                <DeshboardNavbar/>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default DeshboardLayout;