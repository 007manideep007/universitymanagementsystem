import api from './api';

// Description: Search for movies by title
// Endpoint: GET /api/movies/search?query={query}
// Request: { query: string }
// Response: { results: Array<{ id: string, title: string, year: string, poster: string, type: string }> }
export const searchMovies = (query: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        results: [
          { id: 'tt0111161', title: 'The Shawshank Redemption', year: '1994', poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg', type: 'movie' },
          { id: 'tt0068646', title: 'The Godfather', year: '1972', poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
          { id: 'tt0468569', title: 'The Dark Knight', year: '2008', poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg', type: 'movie' },
          { id: 'tt0071562', title: 'The Godfather: Part II', year: '1974', poster: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
          { id: 'tt0050083', title: '12 Angry Men', year: '1957', poster: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg', type: 'movie' },
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get(`/api/movies/search?query=${encodeURIComponent(query)}`);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Get movie details by ID
// Endpoint: GET /api/movies/{id}
// Request: { id: string }
// Response: { id: string, title: string, year: string, poster: string, plot: string, director: string, actors: string, genre: string, rated: string, runtime: string }
export const getMovieDetails = (id: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: id,
        title: id === 'tt0111161' ? 'The Shawshank Redemption' : 'The Godfather',
        year: id === 'tt0111161' ? '1994' : '1972',
        poster: id === 'tt0111161'
          ? 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg'
          : 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        plot: id === 'tt0111161'
          ? 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.'
          : 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
        director: id === 'tt0111161' ? 'Frank Darabont' : 'Francis Ford Coppola',
        actors: id === 'tt0111161' ? 'Tim Robbins, Morgan Freeman, Bob Gunton' : 'Marlon Brando, Al Pacino, James Caan',
        genre: id === 'tt0111161' ? 'Drama' : 'Crime, Drama',
        rated: 'R',
        runtime: id === 'tt0111161' ? '142 min' : '175 min'
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get(`/api/movies/${id}`);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};