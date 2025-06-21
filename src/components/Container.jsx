import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1320px] mx-auto pt-5'>
            {children}
        </div>
    );
};

export default Container;