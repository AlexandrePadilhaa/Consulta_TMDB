import Link from "next/link";
import MovieDetails from "../movieDetails";

export default function moviePage({ params }: {
    params: { movieName: string }
}) {
    const name = decodeURIComponent(params.movieName);

    return (

        <main className="flex flex-col items-center justify-center gap-20">

            <h1 className="md:text-4xl text-xl mb-8 pt-20">Confira os detalhes sobre o filme! {name}</h1>
            <MovieDetails movieName={name} />
            
            <Link href="/">HOME</Link>

        </main>

    );
}