import React, { useEffect, useState } from 'react'

const Search = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handelSearchValue = (event) => {
        setSearchValue(event.target.value);

    }
    useEffect(() => {
        onSearch(searchValue)
    }, [searchValue])
    return (
        <div className='flex justify-between gap-4 sm:gap-0 flex-col container mx-auto sm:flex-row fixed left-0 right-0 top-0 bg-base-300 items-center p-5 z-40'>
            <h1 className=" text-2xl ">Country APP</h1>
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered mx-auto input-accent w-full max-w-xs " value={searchValue} onChange={handelSearchValue} />
            </div>
        </div>
    )
}

export default Search