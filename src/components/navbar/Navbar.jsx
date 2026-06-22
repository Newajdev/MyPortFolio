import React from 'react';
import Container from '../Container';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navlinks = [
        {
            title: 'Works',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'Resume',
            path: '/resume'
        },
    ]
    return (
        <Container>
            <div className='text-white flex items-center justify-between '>
                <div>
                    <h1 className='Irish text-4xl'>Newaj</h1>
                </div>
                <div>
                    <ul className='flex gap-x-6 text-xl'>
                        {
                            navlinks?.map(({title, path})=> 
                            <li key={path}>
                                <NavLink to={path}>{title}</NavLink>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;