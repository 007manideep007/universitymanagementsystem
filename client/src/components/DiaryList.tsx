import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { DiaryEntry } from './DiaryEntry';
import { EmptyState } from './EmptyState';
import { getDiaryEntries } from '@/api/diary';
import { useToast } from '@/hooks/useToast';

export function DiaryList() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const response = await getDiaryEntries();
      setEntries(response.entries || []);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to load diary entries",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  if (loading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <EmptyState
        title="Your diary is empty"
        description="Search for movies and add ratings to build your movie diary."
        actionLabel="Search Movies"
        actionHref="/"
      />
    );
  }

  return (
    <div className="space-y-6">
      {entries.map((entry) => (
        <DiaryEntry key={entry._id} entry={entry} onEntryUpdated={fetchEntries} />
      ))}
    </div>
  );
}