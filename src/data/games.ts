import { Game, Category } from '../types';

export const categories: Category[] = [
  { id: 'action', name: 'Action', icon: 'Sword' },
  { id: 'racing', name: 'Racing', icon: 'Car' },
  { id: 'puzzle', name: 'Puzzle', icon: 'Brain' },
  { id: 'shooter', name: 'Shooter', icon: 'Crosshair' },
  { id: 'all', name: 'All Games', icon: 'Gamepad2' },
];

export const games: Game[] = [
  {
    id: 'monster-survivors',
    title: 'Monster Survivors',
    description: 'Survive waves of monsters in this action-packed game!',
    category: 'action',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop',
    gameUrl: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html',
    featured: true
  },
  {
    id: 'racing-thunder',
    title: 'Racing Thunder',
    description: 'Experience high-speed racing action!',
    category: 'racing',
    imageUrl: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&auto=format&fit=crop',
    gameUrl: 'https://https://liferestart.syaro.io/public/index.html',
    featured: true
  }
];