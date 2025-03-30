import { atom } from "recoil";

export const loginState = atom({
  key: "loginState", // Unique key for the atom
  default: [], // Initial value of the cart state (an empty array)
});

export const registerState = atom({
  key: "registerState", // Unique key for the atom
  default: [], // Initial value of the cart state (an empty array)
});