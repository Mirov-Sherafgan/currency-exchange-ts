import React from 'react';

const Footer:React.FC = () => {
    return (
        <footer className='bg-black'>
            <div className='container mx-auto px-6 py-12 flex justify-between items-center text-white'>
                <p>&copy; 2022 | Sheravgan Mirov</p>
                <p><a href='https://i-am-sheravgan.vercel.app' rel='noreferrer' target='_blank'>Contact me</a></p>
            </div>
        </footer>
    );
};

export default Footer;