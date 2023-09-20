/* eslint-disable react/prop-types */
import { ReactNode } from "react";
import MoviePoster from "./MoviePoster";
import MovieTitle from "./MovieTitle";
import MovieDescription from "./MovieDescription";
import MovieRating from "./MovieRating";
import MovieCardContext from "../../../../context/MovieCardContext";

const MovieCard = ({ movie, poster, information }) => {
  return (
    <MovieCardContext.Provider value={{ movie }}>
      <div className="w-[350px]  bg-slate-100 text-black rounded-lg shadow-white shadow-md ">
        {poster}
        <div className="p-2">{information}</div>
      </div>
    </MovieCardContext.Provider>
  );
};

MovieCard.Poster = MoviePoster;
MovieCard.Title = MovieTitle;
MovieCard.Description = MovieDescription;
MovieCard.Rating = MovieRating;

export default MovieCard;