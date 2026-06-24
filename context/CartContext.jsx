"use client";

import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { calculateTotals } from "@/utils/helpers";

const CartContext = createContext(null);
const STORAGE_KEY = "sparkpro-cart";

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE": {
      return action.payload || [];
    }
    case "ADD_ITEM": {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_ITEM": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "INCREASE_QTY": {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    case "DECREASE_QTY": {
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    }
    case "CLEAR_CART": {
      return [];
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  // Load persisted cart on first mount.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        dispatch({ type: "HYDRATE", payload: JSON.parse(stored) });
      }
    } catch (error) {
      console.error("Failed to read cart from storage", error);
    }
  }, []);

  // Persist cart whenever it changes.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save cart to storage", error);
    }
  }, [items]);

  const addItem = (service) => dispatch({ type: "ADD_ITEM", payload: service });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const increaseQty = (id) => dispatch({ type: "INCREASE_QTY", payload: id });
  const decreaseQty = (id) => dispatch({ type: "DECREASE_QTY", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const cartCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totals = useMemo(() => calculateTotals(items), [items]);

  const value = {
    items,
    addItem,
    removeItem,
    increaseQty,
    decreaseQty,
    clearCart,
    cartCount,
    ...totals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
