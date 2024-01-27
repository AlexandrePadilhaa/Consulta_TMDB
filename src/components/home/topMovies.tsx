"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w200'
function TopMovies() {

    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results)
            })
    }, [])

    return (
        <div className="p-4 ">
            <h1 className="text-3xl font-bold mb-4">TOP MOVIES</h1>

            <ul className="grid grid-cols-2 gap-4">
                {movies.slice(0, 8).map(movie => (
                    <li key={movie.id} className="p-2 flex flex-col items-center">
                        <Image
                            width={200}
                            height={300}
                            src={IMAGE_PATH + movie.poster_path}
                            alt="Imagem do filme"
                            className="w-44 h-150 object-cover rounded mb-2"
                        />
                        <span className="text-center">{movie.title}</span>
                    </li>
                ))}
            </ul>

        </div>);
}

export default TopMovies;