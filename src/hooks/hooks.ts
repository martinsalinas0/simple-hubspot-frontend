// hooks.ts
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../stores/configureStore";

export const useAppDispatch = () => useDispatch<AppDispatch>();
