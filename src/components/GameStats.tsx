import React from 'react';

interface GameStatsProps {
  score: number;
  level: number;
  lines: number;
}

export function GameStats({ score, level, lines }: GameStatsProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="space-y-2">
        <div>
          <h3 className="text-gray-400">分数</h3>
          <p className="text-2xl font-bold">{score}</p>
        </div>
        <div>
          <h3 className="text-gray-400">等级</h3>
          <p className="text-2xl font-bold">{level}</p>
        </div>
        <div>
          <h3 className="text-gray-400">消除行数</h3>
          <p className="text-2xl font-bold">{lines}</p>
        </div>
      </div>
    </div>
  );
}