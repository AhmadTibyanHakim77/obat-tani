"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products as seedProducts } from "@/services/catalog.service";
import type { Product } from "@/types";

const storeVersion = 3;

function isValidProduct(product: Product) {
  return Boolean(
    product.id &&
      product.name &&
      product.price > 0 &&
      product.stock > 0 &&
      product.image &&
      !product.image.toLowerCase().includes("coca") &&
      !product.image.toLowerCase().includes("car")
  );
}

type ProductStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  resetProducts: () => void;
};

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: seedProducts,
      addProduct: (product) =>
        set((state) => ({
          products: [product, ...state.products.filter((item) => item.id !== product.id)]
        })),
      updateProduct: (product) =>
        set((state) => ({
          products: state.products.map((item) => (item.id === product.id ? product : item))
        })),
      deleteProduct: (productId) =>
        set((state) => ({
          products: state.products.filter((item) => item.id !== productId)
        })),
      resetProducts: () => set({ products: seedProducts })
    }),
    {
      name: "agronusa-products-db",
      version: storeVersion,
      migrate: () => ({ products: seedProducts }),
      merge: (persisted, current) => {
        const state = persisted as Partial<ProductStore> | undefined;
        const validProducts = state?.products?.filter(isValidProduct) ?? [];
        const missingSeeds = seedProducts.filter((seed) => !validProducts.some((product) => product.id === seed.id));

        if (validProducts.length < 3) {
          return current;
        }

        return {
          ...current,
          products: [...missingSeeds, ...validProducts]
        };
      }
    }
  )
);
