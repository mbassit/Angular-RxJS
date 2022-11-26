import { Supplier, SupplierClass } from "../suppliers/supplier";

/* Defines the product entity */
export interface Product {
  id: number;
  productName: string;
  productCode?: string;
  description?: string;
  price?: number;
  categoryId?: number;
  category?: string;
  quantityInStock?: number;
  searchKey?: string[];
  supplierIds?: number[];
}

//
// Extras not included in the course
//

// Provided to demonstrate how to map to
// class instances.
export class ProductClass {
  id: number = 0;
  productName: string = '';
  productCode?: string;
  description?: string;
  price?: number;
  category?: string;
  quantityInStock?: number;
  searchKey?: string[];
  inventoryValuation?: number;
  supplierIds?: number[];
  suppliers?: SupplierClass[];

  calculateValuation(): number {
    const price = this.price ? this.price : 0;
    const quantity = this.quantityInStock ? this.quantityInStock : 0;
    return price * quantity;
  }
}

// Provided to demonstrate merging parent and
// child data into individual rows
export interface ProductWithSupplier {
  id: number;
  productName: string;
  productCode?: string;
  description?: string;
  categoryId?: number;
  category?: string;
  supplier?: string;
}

/* Defines the product data as retrieved from the backend server API */
export interface ProductFromAPI {
    p_id: number;
    p_nam: string;
    p_cd: string;
    p_des: string;
    p_s: string;
    p_p: number;
    p_c_fk_id: number;
  }
