import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDbResponse, Movie} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  toprated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [MoviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    toprated: [],
    upComing: [],
  });

  const getMovies = async () => {
    const nowPlaying = movieDB.get<MovieDbResponse>('/now_playing');
    const popular = movieDB.get<MovieDbResponse>('/popular');
    const topRated = movieDB.get<MovieDbResponse>('/top_rated');
    const upcoming = movieDB.get<MovieDbResponse>('/upcoming');

    const res = await Promise.all([nowPlaying, popular, topRated, upcoming]);

    setMoviesState({
      nowPlaying: res[0].data.results,
      popular: res[1].data.results,
      toprated: res[2].data.results,
      upComing: res[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...MoviesState,
    isLoading,
  };
};
