"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type Cashier = {
  name: string;
  email: string;
};

type AuthStore = {
  cashier: Cashier | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      cashier: null,
      login: (email, password) => {
        const valid = email === "kasir@agronusa.id" && password === "kasir123";
        if (valid) {
          set({ cashier: { name: "Kasir AgroNusa", email } });
        }
        return valid;
      },
      logout: () => set({ cashier: null })
    }),
    {
      name: "agronusa-cashier-session"
    }
  )
);
