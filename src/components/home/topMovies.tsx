import Image from 'next/image'


function TopMovies() {

    const movies = [
        {
            id: 1,
            title: "homen aranha",
            image_url: "next.svg"
        },
        {
            id: 2,
            title: "homen aranha 2",
            image_url: "next.svg"
        }
    ]

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">TOP MOVIES</h1>

            <ul className="flex flex-wrap -m-2">

                {movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <li className="w-1/2 p-2" >
                                <Image 
                                    width={500}
                                    height={500}
                                    src={movie.image_url}
                                    alt="Homem-Aranha"
                                    className="w-72 h-150 object-cover rounded"/>

                                <span className="block mt-2">{movie.title}</span>
                            </li>
                        </div>
                    );
                })}

            </ul>
        </div>);
}

export default TopMovies;