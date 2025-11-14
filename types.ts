
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  sortIndex: number;
  price: number;
  unit: string;
}

export interface Recipe {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  featured: boolean;
}
