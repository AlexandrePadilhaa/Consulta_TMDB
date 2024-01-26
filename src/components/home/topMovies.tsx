

function TopMovies() {

    const movies = [
        {
            title: "homen aranha",
            image_url: "https://cdn.awsli.com.br/600x700/222/222813/produto/227368294/4571335883898-1-xjzrzz906v.png"
        },
        {
            title: "homen aranha 2",
            image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5JrbOQHTVPgQMgw7Y5PATdwx1SNbEQzJdw&usqp=CAU"
        }
    ]

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">TOP MOVIES</h1>
            
            <ul className="flex flex-wrap -m-2">

            {movies.map(movie => {
                return (
                    <div>
                        <li className="w-1/2 p-2">
                            <img
                                src={movie.image_url}
                                alt="Homem-Aranha"
                                className="w-72 h-150 object-cover rounded"
                            />
                            <span className="block mt-2">{movie.title}</span>
                        </li>
                    </div>
                );
            })}

            </ul>
        </div>);
}

export default TopMovies;