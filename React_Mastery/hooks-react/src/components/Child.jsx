import React from 'react';
import { useContext } from 'react';
import { AppContext } from './context/UserContext';
const Child = () => {
    const component=useContext(AppContext);
    console.log(component);
    
    return (
        <>
            <div className='flex text-sm gap-x-2 text-green-400'>Hi there ! this is child <b>{component.name}</b>and version <b>{component.version}</b>  .</div>
            <p className="text-green-400">{component.description}</p>
        </>
    );
}

export default Child;
