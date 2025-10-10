import { Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({ title, description, actionLabel, actionHref }: EmptyStateProps) {
  const navigate = useNavigate();

  return (
    <div className="flex h-[400px] w-full flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
      <div className="mb-4 rounded-full bg-primary/10 p-4">
        <Film className="h-10 w-10 text-primary" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-6 max-w-md text-muted-foreground">{description}</p>

      {actionLabel && actionHref && (
        <Button onClick={() => navigate(actionHref)}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}