import Link from "next/link";
import MovieDetails from "../movieDetails";

export default function moviePage({ params }: {
    params: { movieName: string }
}) {
    const name = decodeURIComponent(params.movieName);

    return (

        <main className="flex flex-col items-center justify-center gap-20">

            <Link href="/" className="fixed top-0 left-0 p-4 text-black hover:underline" >HOME</Link>

            <h1 className="md:text-4xl text-xl mb-8 pt-20">Check out more about the movie:  {name}</h1>

            <MovieDetails movieName={name} />

        </main>

    );
}