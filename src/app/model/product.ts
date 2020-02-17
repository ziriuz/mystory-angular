export class Product {
    id: number;
    catalog_id: number;
    name: string;
    image: string;
    sku: string;
    isNew: boolean;
  }

export class ProductsResponse {
    success: boolean;
    topic: string;
    message: string;
    products: Product[];
}

export class ProductResponse {
  success: boolean;
  topic: string;
  message: string;
  product: Product;
}
