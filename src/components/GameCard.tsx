import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';
import { Play } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative aspect-video">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover"
        />
        <Link
          to={`/play/${game.id}`}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
        >
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Play Now</span>
          </button>
        </Link>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
        <p className="text-gray-400 text-sm">{game.description}</p>
      </div>
    </div>
  );
}