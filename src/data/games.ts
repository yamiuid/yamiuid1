import { Game, Category } from '../types';

export const categories: Category[] = [
  { id: 'action', name: 'Action', icon: 'Sword' },
  { id: 'racing', name: 'Racing', icon: 'Car' },
  { id: 'puzzle', name: 'Puzzle', icon: 'Brain' },
  { id: 'shooter', name: 'Shooter', icon: 'Crosshair' },
  { id: 'all', name: 'All Games', icon: 'Gamepad2' },
];

export const games: Game[] = [
  // Action Games
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
    id: 'ninja-warrior',
    title: 'Ninja Warrior',
    description: 'Master the art of stealth and combat in this action adventure.',
    category: 'action',
    imageUrl: 'https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?w=800&auto=format&fit=crop',
    gameUrl: 'https://placeholder.com/game',
    featured: false
  },
  {
    id: 'dragon-quest',
    title: 'Dragon Quest',
    description: 'Embark on an epic journey to defeat powerful dragons.',
    category: 'action',
    imageUrl: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=800&auto=format&fit=crop',
    gameUrl: 'https://placeholder.com/game',
    featured: false
  },

  // Racing Games
  {
    id: 'racing-thunder',
    title: 'Racing Thunder',
    description: 'Experience high-speed racing action!',
    category: 'racing',
    imageUrl: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&auto=format&fit=crop',
    gameUrl: 'https://liferestart.syaro.io/public/index.html',
    featured: true
  },
  {
    id: 'drift-kings',
    title: 'Drift Kings',
    description: 'Master the art of drifting in this intense racing game.',
    category: 'racing',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop',
    gameUrl: 'https://placeholder.com/game',
    featured: false
  },
  {
    id: 'speed-demons',
    title: 'Speed Demons',
    description: 'Push your limits in this high-octane racing experience.',
    category: 'racing',
    imageUrl: 'https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&auto=format&fit=crop',
    gameUrl: 'https://placeholder.com/game',
    featured: false
  },

  // Puzzle Games
  {
    id: 'mind-bender',
    title: 'Mind Bender',
    description: 'Challenge your brain with intricate puzzles.',
    category: 'puzzle',
    imageUrl: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=800&auto=format&fit=crop',
    gameUrl: 'https://placeholder.com/game',
    featured: true
  },
  {
    id: 'color-match',
    title: 'Color Match',
    description: 'Match colors and solve puzzles in this relaxing game.',
    category: 'puzzle',
    imageUrl: 'https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?w=800&auto=format&fit=crop',
    gameUrl: 'https://placeholder.com/game',
    featured: false
  },
  {
    id: 'cube-master',
    title: 'Cube Master',
    description: 'Rotate and solve 3D cube puzzles.',
    category: 'puzzle',
    imageUrl: 'https://images.unsplash.com/photo-1575364289437-fb1479d52732?w=800&auto=format&fit=crop',
    gameUrl: 'https://placeholder.com/game',
    featured: false
  },

  // Shooter Games
  {
    id: 'cyber-assault',
    title: 'Cyber Assault',
    description: 'Fight in futuristic battles with advanced weapons.',
    category: 'shooter',
    imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&auto=format&fit=crop',
    gameUrl: 'https://placeholder.com/game',
    featured: true
  },
  {
    id: 'space-warriors',
    title: 'Space Warriors',
    description: 'Defend the galaxy in this epic space shooter.',
    category: 'shooter',
    imageUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&auto=format&fit=crop',
    gameUrl: 'https://placeholder.com/game',
    featured: false
  },
  {
    id: 'zombie-survival',
    title: 'Zombie Survival',
    description: 'Survive the zombie apocalypse with limited resources.',
    category: 'shooter',
    imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&auto=format&fit=crop',
    gameUrl: 'https://placeholder.com/game',
    featured: false
  }
];