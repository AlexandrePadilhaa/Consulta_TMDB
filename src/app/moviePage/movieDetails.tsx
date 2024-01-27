import React from 'react';

interface MovieDetailsProps {
  movieName: string;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieName }) => {
  return (
    <div>
      <h1>Detalhes do Filme: {movieName}</h1>
      {/* Restante da lógica da página de detalhes */}
    </div>
  );
};

export default MovieDetails;