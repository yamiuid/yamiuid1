import { useState, useEffect, useCallback } from 'react';
import { TetrominoType, Position } from '../types';
import { TETROMINOES, createEmptyBoard, checkCollision } from '../utils/gameUtils';

const BOARD_HEIGHT = 20;
const BOARD_WIDTH = 10;
const INITIAL_DROP_TIME = 800;
const LEVEL_UP_LINES = 10;
const SPEED_MULTIPLIER = 0.75;

// 分数系统 - 只在消除行时得分
const SCORE_SYSTEM = {
  SINGLE: 100,       // 消除1行
  DOUBLE: 300,       // 消除2行
  TRIPLE: 500,       // 消除3行
  TETRIS: 800,       // 消除4行
};

export function useGameLogic() {
  const [board, setBoard] = useState(() => createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState<TetrominoType | null>(null);
  const [currentPos, setCurrentPos] = useState<Position>({ x: 0, y: 0 });
  const [nextPiece, setNextPiece] = useState(() => getRandomTetromino());
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [level, setLevel] = useState(1);
  const [dropTime, setDropTime] = useState(INITIAL_DROP_TIME);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  function getRandomTetromino(): TetrominoType {
    const pieces = Object.keys(TETROMINOES) as (keyof typeof TETROMINOES)[];
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
    return {
      ...TETROMINOES[randomPiece],
      shape: TETROMINOES[randomPiece].shape.map(row => [...row])
    };
  }

  const spawnNewPiece = useCallback(() => {
    const piece = nextPiece;
    const pos = {
      x: Math.floor(BOARD_WIDTH / 2) - Math.floor(piece.shape[0].length / 2),
      y: 0,
    };

    if (checkCollision(board, piece, pos)) {
      setGameOver(true);
      return;
    }

    setCurrentPiece(piece);
    setCurrentPos(pos);
    setNextPiece(getRandomTetromino());
  }, [board, nextPiece]);

  const moveLeft = useCallback(() => {
    if (!currentPiece || isPaused) return;
    const newPos = { ...currentPos, x: currentPos.x - 1 };
    if (!checkCollision(board, currentPiece, newPos)) {
      setCurrentPos(newPos);
    }
  }, [board, currentPiece, currentPos, isPaused]);

  const moveRight = useCallback(() => {
    if (!currentPiece || isPaused) return;
    const newPos = { ...currentPos, x: currentPos.x + 1 };
    if (!checkCollision(board, currentPiece, newPos)) {
      setCurrentPos(newPos);
    }
  }, [board, currentPiece, currentPos, isPaused]);

  const rotate = useCallback(() => {
    if (!currentPiece || isPaused) return;
    const rotatedPiece = {
      ...currentPiece,
      shape: currentPiece.shape[0].map((_, i) =>
        currentPiece.shape.map(row => row[i]).reverse()
      ),
    };
    if (!checkCollision(board, rotatedPiece, currentPos)) {
      setCurrentPiece(rotatedPiece);
    }
  }, [board, currentPiece, currentPos, isPaused]);

  const softDrop = useCallback(() => {
    if (!currentPiece || isPaused) return;
    const newPos = { ...currentPos, y: currentPos.y + 1 };
    if (!checkCollision(board, currentPiece, newPos)) {
      setCurrentPos(newPos);
    }
  }, [board, currentPiece, currentPos, isPaused]);

  const hardDrop = useCallback(() => {
    if (!currentPiece || isPaused) return;
    let newY = currentPos.y;
    while (!checkCollision(board, currentPiece, { ...currentPos, y: newY + 1 })) {
      newY++;
    }
    setCurrentPos({ ...currentPos, y: newY });
  }, [board, currentPiece, currentPos, isPaused]);

  const clearLines = useCallback(() => {
    const newBoard = board.filter(row => row.some(cell => !cell));
    const clearedLines = BOARD_HEIGHT - newBoard.length;
    
    if (clearedLines > 0) {
      const emptyRows = Array(clearedLines)
        .fill(null)
        .map(() => Array(BOARD_WIDTH).fill(null));
      
      setBoard([...emptyRows, ...newBoard]);
      setLines(prev => prev + clearedLines);

      // 根据消除的行数计算得分
      const lineScore = clearedLines === 1 ? SCORE_SYSTEM.SINGLE
        : clearedLines === 2 ? SCORE_SYSTEM.DOUBLE
        : clearedLines === 3 ? SCORE_SYSTEM.TRIPLE
        : SCORE_SYSTEM.TETRIS;
      
      setScore(prev => prev + lineScore * level);
    }
  }, [board, level]);

  const mergePiece = useCallback(() => {
    if (!currentPiece) return;

    const newBoard = board.map(row => [...row]);
    currentPiece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          const boardY = y + currentPos.y;
          const boardX = x + currentPos.x;
          if (boardY >= 0 && boardY < BOARD_HEIGHT) {
            newBoard[boardY][boardX] = {
              color: currentPiece.color,
            };
          }
        }
      });
    });

    setBoard(newBoard);
    clearLines();
    spawnNewPiece();
  }, [board, currentPiece, currentPos, clearLines, spawnNewPiece]);

  const moveDown = useCallback(() => {
    if (!currentPiece || isPaused) return;
    const newPos = { ...currentPos, y: currentPos.y + 1 };
    if (!checkCollision(board, currentPiece, newPos)) {
      setCurrentPos(newPos);
    } else {
      mergePiece();
    }
  }, [board, currentPiece, currentPos, isPaused, mergePiece]);

  useEffect(() => {
    if (!currentPiece && !gameOver) {
      spawnNewPiece();
    }
  }, [currentPiece, gameOver, spawnNewPiece]);

  useEffect(() => {
    const newLevel = Math.floor(lines / LEVEL_UP_LINES) + 1;
    if (newLevel !== level) {
      setLevel(newLevel);
      setDropTime(INITIAL_DROP_TIME * Math.pow(SPEED_MULTIPLIER, newLevel - 1));
    }
  }, [lines, level]);

  useEffect(() => {
    if (!gameOver && !isPaused) {
      const interval = setInterval(moveDown, dropTime);
      return () => clearInterval(interval);
    }
  }, [gameOver, isPaused, dropTime, moveDown]);

  const resetGame = () => {
    setBoard(createEmptyBoard());
    setCurrentPiece(null);
    setNextPiece(getRandomTetromino());
    setScore(0);
    setLines(0);
    setLevel(1);
    setDropTime(INITIAL_DROP_TIME);
    setGameOver(false);
    setIsPaused(false);
  };

  const pauseGame = () => {
    if (!gameOver) {
      setIsPaused(!isPaused);
    }
  };

  return {
    board,
    score,
    level,
    lines,
    nextPiece,
    currentPiece,
    currentPos,
    gameOver,
    isPaused,
    moveLeft,
    moveRight,
    rotate,
    softDrop,
    hardDrop,
    pauseGame,
    resetGame,
  };
}