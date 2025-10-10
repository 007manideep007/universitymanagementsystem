import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';

export function Navigation() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold">
            MovieDiary
          </Link>
          
          <nav className="hidden md:flex">
            <ul className="flex gap-1">
              <li>
                <Link to="/">
                  <Button 
                    variant={isActive('/') ? 'default' : 'ghost'} 
                    className="gap-2"
                  >
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/diary">
                  <Button 
                    variant={isActive('/diary') ? 'default' : 'ghost'} 
                    className="gap-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Diary</span>
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="border-t md:hidden">
        <nav className="container flex">
          <Link to="/" className="flex flex-1 items-center justify-center py-3">
            <Button 
              variant="ghost" 
              className={`w-full justify-center gap-2 ${isActive('/') ? 'bg-accent text-accent-foreground' : ''}`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Button>
          </Link>
          <Link to="/diary" className="flex flex-1 items-center justify-center py-3">
            <Button 
              variant="ghost" 
              className={`w-full justify-center gap-2 ${isActive('/diary') ? 'bg-accent text-accent-foreground' : ''}`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Diary</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}