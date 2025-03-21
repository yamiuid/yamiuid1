import React from 'react';
import { TetrominoType } from '../types';

interface NextPieceProps {
  piece: TetrominoType;
}

export function NextPiece({ piece }: NextPieceProps) {
  // Calculate the dimensions needed for the preview
  const rows = piece.shape.length;
  const cols = piece.shape[0].length;
  const size = Math.max(rows, cols);
  
  // Create a centered grid for the piece
  const grid = Array(size).fill(null).map(() => Array(size).fill(0));
  const offsetY = Math.floor((size - rows) / 2);
  const offsetX = Math.floor((size - cols) / 2);
  
  // Place the piece in the center of the grid
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        grid[y + offsetY][x + offsetX] = value;
      }
    });
  });

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">下一个方块</h3>
      <div className="p-2 rounded bg-gray-700">
        <div 
          className="grid" 
          style={{
            gridTemplateColumns: `repeat(${size}, 1.5rem)`,
            gap: '0px'
          }}
        >
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`w-6 h-6 ${
                  cell ? `bg-${piece.color}` : 'bg-gray-800'
                }`}
                style={{
                  borderRadius: cell ? '0px' : '2px',
                  margin: '0px'
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}