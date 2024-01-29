"use client"
import React, { useEffect, useState } from 'react';
import Image
  from 'next/image';
interface MovieDetailsProps {
  movieName: string;
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300'

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieName }) => {

  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setMovie(data.results[0]);
          console.log(data.results[0]);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, [null]);

  return (

    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        {movie ? (
          <>

            <div className="flex items-center mt-4">
              <h1 className="text-2xl font-bold mb-4 mr-10">Original title: {movie.original_title}</h1>

              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center">
                <p className="text-white font-bold">{movie.vote_average}</p>
              </div>
            </div>

            <h1 className="text-xl">Release date: {movie.release_date}</h1>

            <Image
              width={200}
              height={300}
              src={IMAGE_PATH + movie.poster_path}
              alt="Imagem do filme"
              className="ml-4 rounded shadow-md"
            />

            <h1 className="text-xl mt-4">Overview: {movie.overview}</h1>
          </>
        ) : (
          <h1 className="text-xl"> Not found</h1>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;