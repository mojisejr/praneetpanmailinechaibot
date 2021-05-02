export interface Product {
  name: string;
  category: string;
  type?: string;
  detail?: string;
  height?: string;
  size: string;
  year: string;
  priceMin: number;
  priceMax?: number;
  have: boolean;
}
