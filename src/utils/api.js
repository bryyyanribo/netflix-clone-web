const API_KEY = "bcd615dfb82aa676494f0dd63f369579";
export const GET_TRENDING = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const GET_NETFLIX_ORIGINALS = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const GET_TOP_RATED = `/movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const GET_ACTION_MOVIES = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const GET_COMEDY = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const GET_HORROR = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const GET_ROMANCE = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const GET_DOCUMENTARIES = `/discover/movie?api_key=${API_KEY}&with_genres=99`;
