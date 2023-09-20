import { createContext, useContext } from "react";

const MovieCardContext = createContext(null);

export const useMovieCardContext = () => {
  const context = useContext(MovieCardContext);

  if (!context) throw new Error("Error...");

  return context;
};

export default MovieCardContext;