import MovieCard from "./MovieCard";

const movie = {
  name: "Elemental",
  overview:
    "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
  poster_path:
    "https://image.tmdb.org/t/p/w400/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
  rating: "7.8",
};

function App() {
  return (
    <div className="flex justify-evenly items-center my-2 flex-wrap gap-4 min-h-screen">
      <MovieCard
        movie={movie}
        poster={<MovieCard.Poster />}
        information={
          <>
            <MovieCard.Title />
            <MovieCard.Description />
            <MovieCard.Rating />
          </>
        }
      />

      <MovieCard movie={movie} poster={<MovieCard.Poster />} />
    </div>
  );
}

export default App;