import { Category } from './Category';
import { DetailedProduct, Product } from './Product';

export interface ProductState {
  items: Product[];
  detailedProduct: DetailedProduct | null;
  loading: boolean;
  hasMore: boolean;
  page: number;
  category: Category[];
}