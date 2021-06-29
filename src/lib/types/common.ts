export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  created_at: string;
  updated_at: string;
}

export interface ProductHistoryEntry {
  product_id: string;
  quantity: number;
  created_at: string;
  updated_at: string;
}
