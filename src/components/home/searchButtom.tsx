"use client"
import React, { useState } from 'react';
import Link from 'next/link';

function SearchButtom() {
    const [movieName, setmovieName] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setmovieName(event.target.value);
    };

    return (

        <div className="flex items-center  ">
            <input
                type="text"
                placeholder="EX: baby driver"
                value={movieName}
                onChange={handleChange}
                className=" rounded-md border-gray-400 p-2 mr-2 w-44 md:w-72"
            />
          <Link href={`/moviePage/${encodeURIComponent(movieName)}`}
          className="bg-gray-600 text-black p-2 rounded-md"
          onClick={() => console.log(movieName)}>
            Procurar
          </Link>
        </div>
    );

}

export default SearchButtom;