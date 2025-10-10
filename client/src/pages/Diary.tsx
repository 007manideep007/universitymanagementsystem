import { DiaryList } from '@/components/DiaryList';

export function Diary() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Your Movie Diary</h1>
        <p className="text-lg text-muted-foreground">
          A collection of all your movie ratings and thoughts
        </p>
      </div>
      <DiaryList />
    </div>
  );
}