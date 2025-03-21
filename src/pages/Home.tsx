import React from 'react';
import { GameCard } from '../components/GameCard';
import { games } from '../data/games';
import { Sparkles } from 'lucide-react';

export function Home() {
  const featuredGames = games.filter(game => game.featured);
  const regularGames = games.filter(game => !game.featured);

  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="w-6 h-6 text-yellow-500" />
          <h2 className="text-2xl font-bold text-white">Featured Games</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {featuredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">All Games</h2>
        <div className="grid grid-cols-3 gap-6">
          {regularGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}