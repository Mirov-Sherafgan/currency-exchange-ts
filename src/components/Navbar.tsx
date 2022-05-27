import React from 'react';
import {NavLink} from "react-router-dom";

const links = [
    {id: 0, path: '/', value: 'Мини банк'},
    {id: 1, path: '/', value: 'Конвертер валют'},
    {id: 2, path: 'exchange', value: 'Курс валют'},
]

const Navbar:React.FC = () => {
    return (
        <nav
            className='grid sticky top-0 grid-cols-[1fr_150px_auto] p-6 gap-2 justify-end container mx-auto shadow-2xl'>
            {links.map(link =>
                <NavLink
                    key={link.id}
                    to={link.path}
                    className={({isActive}) => isActive ? link.id !== 0 ? 'text-blue-400' : undefined : undefined}
                >
                    {link.value}
                </NavLink>)}
        </nav>
    );
};

export default Navbar;