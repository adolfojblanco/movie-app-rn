import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'fa897a5e8a0b9268b47684728c85226b',
    language: 'es-ES',
  },
});

export default movieDB;
