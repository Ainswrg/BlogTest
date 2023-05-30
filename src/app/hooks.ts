import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

import { type DispatchFunction } from "shared/types";

import type { RootState } from "./rootReducer";
import type { AppDispatch } from "./store";

export const useAppDispatch = (): DispatchFunction =>
  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
