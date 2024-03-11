import React from 'react';
import Child from './Child';

const Parent = () => {


    return (
        <>
            <div className="py-5">
                <div className='flex text-sm gap-x-2 text-red-600'>Hi there ! this is parent <b>React Form</b> and version <b>12.5.0</b>   .</div>
                <br />
                <Child  />
            </div>
        </>
    );
}

export default Parent;
