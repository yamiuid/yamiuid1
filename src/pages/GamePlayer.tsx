import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { games } from '../data/games';
import { ArrowLeft, Maximize2, Minimize2 } from 'lucide-react';
import { GameIframeLoader } from '../components/GameIframeLoader';

function GamePlayer() {
  const { gameId } = useParams<{ gameId: string }>();
  const game = games.find(g => g.id === gameId);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!game) {
    return <div className="text-white">Game not found</div>;
  }

  const toggleFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (!iframe) return;

    if (!isFullscreen) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <Link
          to="/"
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Games</span>
        </Link>
        <h1 className="text-2xl font-bold text-white order-first sm:order-none">{game.title}</h1>
        <button
          onClick={toggleFullscreen}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5" />
          ) : (
            <Maximize2 className="w-5 h-5" />
          )}
          <span className="hidden sm:inline">
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </span>
        </button>
      </div>
      <div className="aspect-video w-full bg-black rounded-lg overflow-hidden relative group">
        <GameIframeLoader src={game.gameUrl} />
      </div>
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">How to Play</h2>
        <p className="text-gray-400">
          Use your keyboard and mouse to control the game. For mobile devices, touch controls may be available depending on the game. If the game doesn't load properly, try refreshing the page or opening it in a new window.
        </p>
      </div>
    </div>
  );
}

export default GamePlayer;