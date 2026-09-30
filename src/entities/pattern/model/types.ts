export interface Pattern {
  id: string;
  title: string;
  image: string;
  price: number;
  duration: number;
  badges: string[];
  difficulty: 'Легкая' | 'Средняя' | 'Высокая';
}