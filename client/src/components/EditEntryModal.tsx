import { useState } from 'react';
import { Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/useToast';
import { updateDiaryEntry } from '@/api/diary';

interface EditEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  entry: {
    _id: string;
    movieId: string;
    title: string;
    poster: string;
    rating: number;
    notes: string;
    date: string;
  };
  onEntryUpdated: () => void;
}

export default function EditEntryModal({
  isOpen,
  onClose,
  entry,
  onEntryUpdated,
}: EditEntryModalProps) {
  const [rating, setRating] = useState(entry.rating);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [notes, setNotes] = useState(entry.notes);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a rating before submitting",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await updateDiaryEntry(entry._id, {
        rating,
        notes,
      });

      toast({
        title: "Success",
        description: "Diary entry updated successfully",
      });
      onEntryUpdated();
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to update diary entry",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit "{entry.title}"</DialogTitle>
          <DialogDescription>
            Update your rating and notes for this movie
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center">
              <div className="h-40 w-28 overflow-hidden rounded-md">
                {entry.poster !== 'N/A' ? (
                  <img
                    src={entry.poster}
                    alt={`${entry.title} poster`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted">
                    <span className="text-muted-foreground">No poster</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="rounded-md p-1 transition-colors hover:bg-primary/10"
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted-foreground'
                    }`}
                  />
                </button>
              ))}
            </div>
            <span className="text-sm font-medium">
              {rating > 0 ? `Your rating: ${rating} of 5 stars` : 'Select a rating'}
            </span>
          </div>

          <div className="space-y-2">
            <label htmlFor="notes" className="text-sm font-medium">
              Notes
            </label>
            <Textarea
              id="notes"
              placeholder="Write your thoughts about the movie..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}