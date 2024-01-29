import SearchButtom from "@/components/home/searchButtom";
import TopMovies from "@/components/home/topMovies";


export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center gap-20">
    
      <h1 className="md:text-4xl text-xl mb-8 pt-20">Search for your favorite movie!</h1>
     
      <SearchButtom />
     
      <TopMovies  />
      
    </main>
  );
}
