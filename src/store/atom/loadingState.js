// src/store/loadingState.js

import { atom } from "recoil";

export const loadingState = atom({
  key: "loadingState", // Unique identifier for this atom
  default: false, // Initial loading state (not loading)
});
