import React from 'react';
import { Pause, RotateCcw, Play } from 'lucide-react';

interface GameControlsProps {
  onPause: () => void;
  onReset: () => void;
  isPaused: boolean;
}

export function GameControls({ onPause, onReset, isPaused }: GameControlsProps) {
  return (
    <div className="flex gap-4">
      <button
        onClick={onPause}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
      >
        {isPaused ? <Play size={20} /> : <Pause size={20} />}
        {isPaused ? '继续' : '暂停'}
      </button>
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
      >
        <RotateCcw size={20} />
        重新开始
      </button>
    </div>
  );
}