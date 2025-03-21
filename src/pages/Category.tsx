import React from 'react';
import { useParams } from 'react-router-dom';
import { GameCard } from '../components/GameCard';
import { games, categories } from '../data/games';

export function Category() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(c => c.id === categoryId);
  const categoryGames = games.filter(game => game.category === categoryId);

  if (!category) {
    return <div className="text-white">Category not found</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">{category.name} Games</h2>
      <div className="grid grid-cols-3 gap-6">
        {categoryGames.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}