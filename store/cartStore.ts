import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  slug: string;
  customization?: {
    fragrance?: string;
    color?: string;
    message?: string;
    size?: string;
  };
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) => set((state) => {
        const existingItem = state.items.find(item =>
          item.id === newItem.id &&
          JSON.stringify(item.customization) === JSON.stringify(newItem.customization)
        );

        if (existingItem) {
          return {
            items: state.items.map(item =>
              item.id === newItem.id &&
              JSON.stringify(item.customization) === JSON.stringify(newItem.customization)
                ? { ...item, quantity: item.quantity + newItem.quantity }
                : item
            ),
          };
        }

        return { items: [...state.items, newItem] };
      }),

      removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id),
      })),

      updateQuantity: (id, quantity) => set((state) => {
        if (quantity <= 0) {
          return { items: state.items.filter(item => item.id !== id) };
        }

        return {
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        };
      }),

      clearCart: () => set({ items: [] }),

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'nessycrea-cart-storage',
    }
  )
);
