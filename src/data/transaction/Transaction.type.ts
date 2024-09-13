import {ProductDetailDto} from "../product/ProductDto.type.ts";

export interface TransactionDto {
  tid:       number;
  buyer_uid: number;
  datetime:  string;
  status:    string;
  total:     number;
  items:     TransationItemDto[];
}

export interface TransationItemDto {
  tpid:     number;
  product:  ProductDetailDto;
  quantity: number;
  subtotal: number;
}

export interface TransactionListDto {
  tid:       number;
  datetime:  string;
  status:    string;
  total:     number;
}