export interface Recipe {
  id: string;
  src: string;
  rating: number;
  time: number;
  name: string;
  desc: string;
  directions: string;
  ingredients: number; //Array<string>;
}
