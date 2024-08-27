export interface ProductDto {
  pid:         number;
  name:        string;
  description: string;
  imageUrl:    string;
  category:    string;
  price:       number;
  hasStock:    boolean;
}

export interface ProductDetailDto {
  pid:         number;
  name:        string;
  description: string;
  imageUrl:    string;
  category:    string;
  price:       number;
  stock:       number;
}