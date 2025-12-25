
export type ProductCategory = 'Gloves' | 'Elbow Gloves' | 'Disposable Products' | 'Sanitizer';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description?: string;
  productCodes?: string[];
  sizes?: string[];
  features?: string[];
  image: string;
  specs?: {
    type?: string;
    length?: string;
    color?: string;
    packing?: string;
    usage?: string;
    material?: string;
    sterility?: string;
    standards?: string[];
    aql?: string;
    tensileStrength?: string;
    elongation?: string;
  };
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
