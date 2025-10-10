import { useState } from 'react';
import { Star, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/useToast';
import RatingModal from './RatingModal';

interface MovieCardProps {
  id: string;
  title: string;
  year: string;
  poster: string;
}

export function MovieCard({ id, title, year, poster }: MovieCardProps) {
  const { toast } = useToast();
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-[2/3] overflow-hidden">
          {poster !== 'N/A' ? (
            <img
              src={poster}
              alt={`${title} poster`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <span className="text-muted-foreground">No poster available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div className="absolute bottom-0 w-full p-4">
              <h3 className="font-bold text-white">{title}</h3>
              <p className="text-sm text-white/80">{year}</p>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="line-clamp-1 font-medium">{title}</h3>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:bg-primary/10 hover:text-primary"
              onClick={() => setIsRatingModalOpen(true)}
            >
              <Star className="h-5 w-5" />
              <span className="sr-only">Rate</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <RatingModal
        isOpen={isRatingModalOpen}
        onClose={() => setIsRatingModalOpen(false)}
        movieId={id}
        movieTitle={title}
        moviePoster={poster}
      />
    </>
  );
}