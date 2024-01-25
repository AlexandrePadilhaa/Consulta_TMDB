"use client"
import React, { useState } from 'react';

export default function Home() {
  
  const [nomeFilme, setNomeFilme] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNomeFilme(event.target.value);
  };

  return (
<main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-8">Consulte o seu filme favorito!</h1>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="EX: baby driver"
          value={nomeFilme}
          onChange={handleChange}
          className=" rounded-md border-gray-400 p-2 mr-2"
        />
        <button
          className="bg-gray-600 text-black p-2 rounded-md"
          onClick={() => console.log(nomeFilme)}
        >
          Procurar
        </button>
      </div>
    </main>
  );
}
