import {configureStore, combineReducers} from "@reduxjs/toolkit";
import exchange from "./exchange";

const rootReducer = combineReducers({
    exchange,
})

export const setupStore = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch