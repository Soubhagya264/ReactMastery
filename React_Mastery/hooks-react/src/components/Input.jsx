import React, { useCallback, useEffect, useRef, useState } from 'react';

const Input = ({ passwordGenerator, setLength, length, numberAllowed, setNumberAllowed, charAllowed, setcharAllowed, password }) => {

    const [copied, setCopied] = useState(false)
    const passwordRef = useRef(null);


    const passwordCopy = useCallback(() => {
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password);
        setCopied((prev) => !prev)
    })
    useEffect(() => {
        if(copied) setCopied((prev) => !prev);
        passwordGenerator();
        
       
    }, [charAllowed, length, numberAllowed])
    return (
        <>
            <div class="flex w-full items-center  ">
                <input
                    class="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="password"
                    value={password}
                    ref={passwordRef}
                />
                {!copied ? <button
                    type="button"
                    class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={passwordCopy}

                >
                    Copy
                </button> :
                    <button
                        type="button"
                        class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                        Copied
                    </button>}


            </div>
            <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className='cursor-pointer'
                        onChange={(e) => { setLength(e.target.value) }}
                    />
                    <label>Length: {length}</label>
                </div>
            </div>
            <div className="flex items-center gap-x-1">
                <input
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    onChange={() => {
                        setNumberAllowed((prev) => !prev);
                    }}
                />
                <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id="characterInput"
                    onChange={() => {
                        setcharAllowed((prev) => !prev);
                    }}
                />
                <label
                    htmlFor="characterInput">Characters</label>
            </div>
        </>
    );
}

export default Input;
