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
    <div>
      {movie && (
        <>
          <h1>ID: {movie.id}</h1>
          <h1>Título Original: {movie.original_title}</h1>
          <h1>nota : {movie.vote_average}</h1>
          <Image
            width={200}
            height={300}
            src={IMAGE_PATH + movie.poster_path}
            alt="Imagem do filme"
            className="w-44 h-150 object-cover rounded mb-2"
          />
          <h1>Visão Geral: {movie.overview}</h1>
        </>
      )}
        {!movie && (
      <h1>filme não encontrado</h1>
    )}
    </div>
  );
};

export default MovieDetails;