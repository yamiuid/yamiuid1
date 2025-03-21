import React, { useState, useEffect, useCallback } from 'react';
import { useGameLogic } from '../hooks/useGameLogic';
import { NextPiece } from './NextPiece';
import { GameStats } from './GameStats';
import { GameControls } from './GameControls';

export function GameBoard() {
  const {
    board,
    score,
    level,
    lines,
    nextPiece,
    gameOver,
    isPaused,
    currentPiece,
    currentPos,
    moveLeft,
    moveRight,
    rotate,
    softDrop,
    hardDrop,
    startGame,
    pauseGame,
    resetGame,
  } = useGameLogic();

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (gameOver) return;

    switch (event.key) {
      case 'ArrowLeft':
      case 'a':
      case 'A':
        moveLeft();
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        moveRight();
        break;
      case 'ArrowUp':
      case 'w':
      case 'W':
        rotate();
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        softDrop();
        break;
      case ' ':
        hardDrop();
        break;
      case 'p':
      case 'P':
        pauseGame();
        break;
      default:
        break;
    }
  }, [gameOver, moveLeft, moveRight, rotate, softDrop, hardDrop, pauseGame]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  // Create a merged board with current piece
  const displayBoard = board.map(row => [...row]);
  if (currentPiece && !gameOver && !isPaused) {
    currentPiece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          const boardY = y + currentPos.y;
          const boardX = x + currentPos.x;
          if (boardY >= 0 && boardY < 20 && boardX >= 0 && boardX < 10) {
            displayBoard[boardY][boardX] = {
              color: currentPiece.color,
            };
          }
        }
      });
    });
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="relative">
        <div className="grid grid-cols-10 gap-px bg-gray-700 p-2 rounded-lg shadow-lg">
          {displayBoard.map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`w-6 h-6 rounded-sm ${
                  cell
                    ? `bg-${cell.color} shadow-inner`
                    : 'bg-gray-800'
                }`}
              />
            ))
          )}
        </div>
        {(gameOver || isPaused) && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                {gameOver ? '游戏结束' : '已暂停'}
              </h2>
              <button
                onClick={gameOver ? resetGame : pauseGame}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
              >
                {gameOver ? '重新开始' : '继续游戏'}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-8">
        <NextPiece piece={nextPiece} />
        <GameStats score={score} level={level} lines={lines} />
        <GameControls
          onPause={pauseGame}
          onReset={resetGame}
          isPaused={isPaused}
        />
      </div>
    </div>
  );
}