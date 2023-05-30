import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware, type Store } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer, { type RootState } from "./rootReducer";

const sagaMiddleWare = createSagaMiddleware();

const configureStore = (preloadedState?: RootState): Store<RootState> =>
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleWare)),
  );

const store = configureStore();

export type AppDispatch = typeof store.dispatch;
export default store;
