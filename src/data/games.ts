import { Game, Category } from '../types';

export const categories: Category[] = [
  { id: 'best', name: 'Best', icon: 'ThumbsUp' },
  { id: 'arcade', name: 'Arcade', icon: 'Rocket' },
  { id: 'bubble shooter', name: 'Bubble Shooter', icon: 'CircleDot' },
  { id: 'racing', name: 'Racing', icon: 'Car' },
  { id: 'puzzle', name: 'Puzzle', icon: 'Brain' },
  { id: 'cards', name: 'Cards', icon: 'Club' },
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
    gameUrl: 'https://play.famobi.com/om-nom-run/A1000-10',
    featured: true
  },
  {
    id: 'GardenBloom',
    title: 'Garden Bloom',
    description: 'Match at least 3 flowers of the same color to get flowertastic results!The more you can merge, the more powerful the effect will be!',
    category: 'best',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/GardenBloomTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/garden-bloom/A1000-10',
    featured: true
  },
  {
    id: 'BubbleTower3D',
    title: 'Bubble Tower 3D',
    description: 'If you are a friend of oldschool bubbleshooters then you will love Bubble Tower 3D',
    category: 'best',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/BubbleTower3dTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/bubble-tower-3d/A1000-10',
    featured: false
  },

  {
    id: 'CannonBalls-3D',
    title: 'Cannon Balls 3D',
    description: 'Try to be the master of destruction, heat up the buildings neatly and show no mercy!',
    category: 'best',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/CannonBalls3dTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/cannon-balls-3d/A1000-10',
    featured: false
  },
  {
    id: 'TowerCrash-3D',
    title: 'Tower Crash 3D',
    description: 'Crash the Tower! Only the best crashers will be able to destroy alltowers in this 3D physics game',
    category: 'best',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/TowerCrash3dTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/tower-crash-3d/A1000-10',
    featured: false
  },

  {
    id: 'ElementBlocks',
    title: 'Element Blocks',
    description: 'Weather the elements in this crazy addictive puzzle game!',
    category: 'best',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ElementBlocksTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/element-blocks/A1000-10',
    featured: false
  },
  
 // Arcade Games
 {
  id: 'TrainMiner',
  title: 'Train Miner',
  description: 'All aboard for endless mining fun in Train Miner – expand, upgrade, and dominate the tracks! ',
  category: 'arcade',
  imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/TrainMinerTeaser.jpg?v=0.2-e9a56fac',
  gameUrl: 'https://play.famobi.com/wrapper/train-miner/A1000-10',
  featured: true
},
{
  id: 'RiseUp',
  title: 'Rise Up',
  description: 'Protect, dodge, and rise to the top in Rise Up , the ultimate survival challenge!',
  category: 'arcade',
  imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/RiseUpTeaser.jpg?v=0.2-e9a56fac',
  gameUrl: 'https://play.famobi.com/wrapper/rise-up/A1000-10',
  featured: true
},
{
  id: 'GiantRush',
  title: 'Giant Rush',
  description: 'Run, merge, and battle giants in Giant Rush – the ultimate action-packed adventure!',
  category: 'arcade',
  imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/GiantRushTeaser.jpg?v=0.2-e9a56fac',
  gameUrl: 'https://play.famobi.com/wrapper/giant-rush/A1000-10',
  featured: false
},

{
  id: 'FruitParty',
  title: 'Fruit Party',
  description: 'Merge and grow your fruits to score big in Fruit Party - the ultimate basket-dropping challenge! ',
  category: 'arcade',
  imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/FruitPartyTeaser.jpg?v=0.2-e9a56fac',
  gameUrl: 'https://play.famobi.com/fruit-party/A1000-10',
  featured: false
},
{
  id: 'AlienAttack',
  title: 'Alien Attack',
  description: 'Blast off and dominate the cosmos in Alien Attack - the ultimate 2D spaceship shooter!',
  category: 'arcade',
  imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/AlienAttackTeaser.jpg?v=0.2-e9a56fac',
  gameUrl: 'https://play.famobi.com/alien-attack/A1000-10',
  featured: false
},

{
  id: 'Block Painter',
  title: 'Block Painter',
  description: 'Master colorful challenges in Block Painter – the ultimate bridge-building adventure! ',
  category: 'arcade',
  imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/BlockPainterTeaser.jpg?v=0.2-e9a56fac',
  gameUrl: 'https://play.famobi.com/block-painter/A1000-10',
  featured: false
},




   // bubble shooter Games
   {
    id: 'OmNomBubbles',
    title: 'Om Nom Bubbles',
    description: 'Get ready for the new challenging adventure Om Nom Bubbles and help him shoot all those tasty candies!',
    category: 'bubble shooter',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/OmNomBubblesTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/om-nom-bubbles/A1000-10',
    featured: true
  },
  {
    id: 'SmartyBubbles-2',
    title: 'Smarty Bubbles 2',
    description: 'nother part of the popular and most successful Bubble Shooter for the whole family goes into round 2, now even prettier! ',
    category: 'bubble shooter',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/SmartyBubbles2Teaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/smarty-bubbles-2/A1000-10',
    featured: true
  },
  {
    id: 'Fuzzies',
    title: 'Fuzzies',
    description: 'Once upon a time, the colorful and cuddly Fuzzies lived happily together in their village. ',
    category: 'bubble shooter',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/FuzziesTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/fuzzies/A1000-10',
    featured: false
  },

  // Racing Games
  {
    id: 'DragRacingClub',
    title: 'Drag Racing Club',
    description: 'Get into your car and explore the exciting world of street drag racing!',
    category: 'racing',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/DragRacingClubTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/drag-racing-club/A1000-10',
    featured: true
  },
  {
    id: 'MotoFury',
    title: 'Moto Fury',
    description: 'Hop on your motorcycle and drive as long and fast as you can without crashing!',
    category: 'racing',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/MotoFuryTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/moto-fury/A1000-10',
    featured: false
  },
  {
    id: 'Moto-X3M',
    title: 'Moto X3M',
    description: 'Get on your motorbike and try to beat 25 challenging levels as fast as you can.',
    category: 'racing',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/MotoX3mTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/moto-x3m/A1000-10',
    featured: false
  },
  {
    id: 'DriftDudes',
    title: 'Moto X3M',
    description: 'Burn the rubber on the asphalt and drift your way through the finish line in this awesome new mutliplayer racing game, Drift Dudes! ',
    category: 'racing',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/DriftDudesTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/drift-dudes/A1000-10',
    featured: false
  },
  {
    id: 'RacingMonsterTrucks',
    title: 'Racing Monster Trucks',
    description: 'Rev up your engine and leave your competitors in the dust in this thrilling monster truck racing game!',
    category: 'racing',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/RacingMonsterTrucksTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/drift-dudes/A1000-10',
    featured: false
  },
  {
    id: 'HighwayRiderExtreme',
    title: 'Highway Rider Extreme',
    description: 'Put on a helmet and ride your motorbike in this super fast-paced racing game! ',
    category: 'racing',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/HighwayRiderExtremeTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/highway-rider-extreme/A1000-10',
    featured: false
  },
  {
    id: 'HexGL',
    title: 'HexGL',
    description: 'HexGL is a fast-paced racing game. Players can use a keyboard, touchscreen devices, or Leap Motion (motion controller) to control a spaceship',
    category: 'racing',
    imageUrl: 'https://image-static.segmentfault.com/260/768/2607682912-5eca2401a1b66_fix732',
    gameUrl: 'https://hexgl.bkcore.com/play//A1000-10',
    featured: false
  },

  // Puzzle Games
  {
    id: 'Go-Escape',
    title: 'Go Escape',
    description: 'Dodge, jump, and escape in Go Escape - the ultimate test of skill and reflexes! ',
    category: 'puzzle',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/GoEscapeTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/go-escape/A1000-10',
    featured: true
  },
  {
    id: 'ColorFill-3D',
    title: 'Color Fill 3D',
    description: 'In Color Fill 3D, your objective is to fill the entire grid with color by moving a block across the empty spaces.',
    category: 'puzzle',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ColorFill3dTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/color-fill-3d/A1000-10',
    featured: false
  },
  {
    id: 'Spot-the-Cat',
    title: 'Spot the Cat',
    description: 'Discover hidden objects in Spot the Cat - a whimsical search-and-find puzzle game!',
    category: 'puzzle',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/SpotTheCatTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/spot-the-cat/A1000-10',
    featured: false
  },
  {
    id: 'ColorRoll-3D',
    title: 'Color Roll 3D',
    description: 'Unroll your way to victory in Color Roll 3D - the ultimate 3D puzzle challenge!',
    category: 'puzzle',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ColorRoll3dTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/color-roll-3d/A1000-10',
    featured: false
  },
  {
    id: 'ColorWaterSort-3D',
    title: 'Color Water Sort 3D',
    description: 'Dive into the colorful challenge of Color Water Sort 3D - where strategy meets vibrant fun! ',
    category: 'puzzle',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ColorWaterSort3dTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/color-water-sort-3d/A1000-10',
    featured: false
  },
  {
    id: 'Braindom',
    title: 'Braindom',
    description: 'Challenge your mind and learn history with Braindom - the ultimate puzzle-packed brain teaser! ',
    category: 'puzzle',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/BraindomTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/braindom/A1000-10',
    featured: false
  },




  // card Games
  {
    id: 'Crossover-21',
    title: 'Crossover 21',
    description: 'In Crossover 21 you tactically need to match the cards smart in order to achieve the magic "21" both vertical and horizontal.',
    category: 'cards',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/Crossover21Teaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/crossover-21/A1000-10',
    featured: true
  },
  {
    id: 'PirateCards',
    title: 'Pirate Cards',
    description: 'In this rogue-like card game you play as a brave pirate captain exploring a far-away island full of dangers and treasures.',
    category: 'cards',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/PirateCardsTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/pirate-cards/A1000-10',
    featured: false
  },
  {
    id: 'SolitaireLegend',
    title: 'Solitaire Legend',
    description: 'Your task is to move all cards from the tableau to the four foundation piles, sorted by suit and rank in ascending order from Ace to King',
    category: 'cards',
    imageUrl: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/SolitaireLegendTeaser.jpg?v=0.2-e9a56fac',
    gameUrl: 'https://play.famobi.com/solitaire-legend/A1000-10',
    featured: false
  }
];