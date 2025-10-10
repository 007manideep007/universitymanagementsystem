import { MovieSearch } from '@/components/MovieSearch';
import { Layout } from '@/components/Layout';

export function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Movie Diary</h1>
        <p className="text-lg text-muted-foreground">
          Search for movies, rate them, and keep track of your thoughts
        </p>
      </div>
      <MovieSearch />
    </div>
  );
}