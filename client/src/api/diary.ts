import api from './api';

export interface DiaryEntry {
  _id: string;
  movieId: string;
  title: string;
  poster: string;
  rating: number;
  notes: string;
  date: string;
}

// Description: Get all diary entries
// Endpoint: GET /api/diary
// Request: {}
// Response: { entries: Array<DiaryEntry> }
export const getDiaryEntries = () => {
  // Mocking the response
  return new Promise<{ entries: DiaryEntry[] }>((resolve) => {
    setTimeout(() => {
      resolve({
        entries: [
          {
            _id: '1',
            movieId: 'tt0111161',
            title: 'The Shawshank Redemption',
            poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
            rating: 5,
            notes: 'One of the best movies I\'ve ever seen. The story of hope and redemption is timeless.',
            date: '2023-12-15'
          },
          {
            _id: '2',
            movieId: 'tt0068646',
            title: 'The Godfather',
            poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            rating: 4,
            notes: 'A masterpiece of cinema. Brando\'s performance is legendary.',
            date: '2023-11-20'
          },
          {
            _id: '3',
            movieId: 'tt0468569',
            title: 'The Dark Knight',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
            rating: 5,
            notes: 'Heath Ledger\'s Joker is unforgettable. Christopher Nolan at his best.',
            date: '2024-01-05'
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/diary');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Add a new diary entry
// Endpoint: POST /api/diary
// Request: { movieId: string, title: string, poster: string, rating: number, notes: string }
// Response: { entry: DiaryEntry }
export const addDiaryEntry = (data: { movieId: string, title: string, poster: string, rating: number, notes: string }) => {
  // Mocking the response
  return new Promise<{ entry: DiaryEntry }>((resolve) => {
    setTimeout(() => {
      resolve({
        entry: {
          _id: Math.random().toString(36).substring(2, 9),
          ...data,
          date: new Date().toISOString().split('T')[0]
        }
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.post('/api/diary', data);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Update a diary entry
// Endpoint: PUT /api/diary/{id}
// Request: { rating?: number, notes?: string }
// Response: { entry: DiaryEntry }
export const updateDiaryEntry = (id: string, data: { rating?: number, notes?: string }) => {
  // Mocking the response
  return new Promise<{ entry: DiaryEntry }>((resolve) => {
    setTimeout(() => {
      resolve({
        entry: {
          _id: id,
          movieId: 'tt0111161',
          title: 'The Shawshank Redemption',
          poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
          rating: data.rating || 5,
          notes: data.notes || 'Updated notes',
          date: '2023-12-15'
        }
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.put(`/api/diary/${id}`, data);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Delete a diary entry
// Endpoint: DELETE /api/diary/{id}
// Request: {}
// Response: { success: boolean }
export const deleteDiaryEntry = (id: string) => {
  // Mocking the response
  return new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.delete(`/api/diary/${id}`);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};