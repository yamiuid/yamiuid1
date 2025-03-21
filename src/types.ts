export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  gameUrl: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}