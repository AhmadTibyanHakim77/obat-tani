"use client";

import { create } from "zustand";

type CartItem = {
  productId: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (productId, quantity = 1) =>
    set((state) => {
      const current = state.items.find((item) => item.productId === productId);
      if (current) {
        return {
          items: state.items.map((item) =>
            item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item
          )
        };
      }
      return { items: [...state.items, { productId, quantity }] };
    }),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      items: state.items
        .map((item) => (item.productId === productId ? { ...item, quantity: Math.max(1, quantity) } : item))
        .filter((item) => item.quantity > 0)
    })),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId)
    })),
  clear: () => set({ items: [] })
}));
