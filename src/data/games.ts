import { Game, Category } from '../types';

export const categories: Category[] = [
  { id: 'best', name: 'Best', icon: 'ThumbsUp' },
  { id: 'action', name: 'Action', icon: 'Sword' },
  { id: 'racing', name: 'Racing', icon: 'Car' },
  { id: 'puzzle', name: 'Puzzle', icon: 'Brain' },
  { id: 'shooter', name: 'Shooter', icon: 'Crosshair' },
  { id: 'all', name: 'All Games', icon: 'Gamepad2' },
];

export const games: Game[] = [
  // Best Games
  {
    id: 'OmNomRun',
    title: 'Om Nom Run',
    description: 'Run alongside Om Nom in his famous adventure',
    category: 'best',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/OmNomRunTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/om-nom-run',
    featured: true
  },
  {
    id: 'GardenBloom',
    title: 'Garden Bloom',
    description: 'Match at least 3 flowers of the same color to get flowertastic results!The more you can merge, the more powerful the effect will be!',
    category: 'best',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/GardenBloomTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/garden-bloom',
    featured: true
  },
  {
    id: 'BubbleTower3D',
    title: 'Bubble Tower 3D',
    description: 'If you are a friend of oldschool bubbleshooters then you will love Bubble Tower 3D',
    category: 'best',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/BubbleTower3dTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/bubble-tower-3d',
    featured: false
  },

  {
    id: 'CannonBalls-3D',
    title: 'Cannon Balls 3D',
    description: 'Try to be the master of destruction, heat up the buildings neatly and show no mercy!',
    category: 'best',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/CannonBalls3dTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/cannon-balls-3d',
    featured: false
  },
  {
    id: 'TowerCrash-3D',
    title: 'Tower Crash 3D',
    description: 'Crash the Tower! Only the best crashers will be able to destroy alltowers in this 3D physics game',
    category: 'best',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/TowerCrash3dTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/tower-crash-3d',
    featured: false
  },

  {
    id: 'ElementBlocks',
    title: 'Element Blocks',
    description: 'Weather the elements in this crazy addictive puzzle game!',
    category: 'best',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ElementBlocksTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/element-blocks',
    featured: false
  },
  
   // Action Games
   {
    id: 'monster-survivors-action',
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
    gameUrl: 'https://play.famobi.com/train-miner',
    featured: true
  },
  {
    id: 'dragon-quest',
    title: 'Dragon Quest',
    description: 'Embark on an epic journey to defeat powerful dragons.',
    category: 'action',
    imageUrl: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=800&auto=format&fit=crop',
    gameUrl: 'https://play.famobi.com/rise-up',
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
    id: 'Go-Escape',
    title: 'Go Escape',
    description: 'Dodge, jump, and escape in Go Escape - the ultimate test of skill and reflexes! ',
    category: 'puzzle',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/GoEscapeTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/go-escape',
    featured: true
  },
  {
    id: 'ColorFill-3D',
    title: 'Color Fill 3D',
    description: 'In Color Fill 3D, your objective is to fill the entire grid with color by moving a block across the empty spaces.',
    category: 'puzzle',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ColorFill3dTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/color-fill-3d',
    featured: false
  },
  {
    id: 'Spot-the-Cat',
    title: 'Spot the Cat',
    description: 'Discover hidden objects in Spot the Cat - a whimsical search-and-find puzzle game!',
    category: 'puzzle',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/SpotTheCatTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/spot-the-cat',
    featured: false
  },
  {
    id: 'ColorRoll-3D',
    title: 'Color Roll 3D',
    description: 'Unroll your way to victory in Color Roll 3D - the ultimate 3D puzzle challenge!',
    category: 'puzzle',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ColorRoll3dTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/color-roll-3d',
    featured: false
  },
  {
    id: 'ColorWaterSort-3D',
    title: 'Color Water Sort 3D',
    description: 'Dive into the colorful challenge of Color Water Sort 3D - where strategy meets vibrant fun! ',
    category: 'puzzle',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ColorWaterSort3dTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/color-water-sort-3d',
    featured: false
  },
  {
    id: 'Braindom',
    title: 'Braindom',
    description: 'Challenge your mind and learn history with Braindom - the ultimate puzzle-packed brain teaser! ',
    category: 'puzzle',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/BraindomTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/braindom',
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