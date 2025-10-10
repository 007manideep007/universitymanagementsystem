import { useState } from 'react';
import { Star, Edit2, Trash2 } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/useToast';
import { deleteDiaryEntry } from '@/api/diary';
import EditEntryModal from './EditEntryModal';

interface DiaryEntryProps {
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

export function DiaryEntry({ entry, onEntryUpdated }: DiaryEntryProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this entry?')) {
      setIsDeleting(true);
      try {
        await deleteDiaryEntry(entry._id);
        toast({
          title: "Entry deleted",
          description: "The diary entry has been removed",
        });
        onEntryUpdated();
      } catch (error) {
        toast({
          title: "Error",
          description: error.message || "Failed to delete entry",
          variant: "destructive",
        });
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
        <div className="flex flex-col sm:flex-row">
          <div className="relative h-48 w-full sm:h-auto sm:w-1/3">
            {entry.poster !== 'N/A' ? (
              <img
                src={entry.poster}
                alt={`${entry.title} poster`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <span className="text-muted-foreground">No poster available</span>
              </div>
            )}
          </div>

          <CardContent className="flex flex-1 flex-col p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xl font-bold">{entry.title}</h3>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < entry.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mb-2 text-sm text-muted-foreground">
              Watched on {formatDate(entry.date)}
            </div>

            <div className="flex-1">
              {entry.notes ? (
                <p className="text-sm">{entry.notes}</p>
              ) : (
                <p className="text-sm italic text-muted-foreground">No notes added</p>
              )}
            </div>
          </CardContent>
        </div>

        <CardFooter className="flex justify-end gap-2 bg-muted/30 p-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1"
            onClick={() => setIsEditModalOpen(true)}
          >
            <Edit2 className="h-4 w-4" />
            <span>Edit</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1 text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <span>Deleting...</span>
            ) : (
              <>
                <Trash2 className="h-4 w-4" />
                <span>Delete</span>
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <EditEntryModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        entry={entry}
        onEntryUpdated={onEntryUpdated}
      />
    </>
  );
}