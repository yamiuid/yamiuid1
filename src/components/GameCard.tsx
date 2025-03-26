import { Link, useLocation } from 'react-router-dom';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const location = useLocation();
  
  // 从当前 URL 中提取类目
  const getCurrentCategory = () => {
    const path = location.pathname;
    if (path === '/') return 'all';
    const match = path.match(/\/category\/(.+)/);
    return match ? match[1] : 'all';
  };

  return (
    <Link 
      to={`/play/${game.id}`} 
      state={{ fromCategory: getCurrentCategory() }}
      className="block bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-video relative">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover"
        />
        {game.featured && (
          <span className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{game.title}</h3>
        <p className="text-gray-400 text-sm mt-1">{game.description}</p>
      </div>
    </Link>
  );
}