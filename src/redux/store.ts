import { configureStore } from "@reduxjs/toolkit";
import captionSliceReducer from "./slices/captionSlice";
import realTimeDataSliceReducer from "./slices/realTimeDataSlice";
import languageSliceReducer from "./slices/langugeSlice";

export const store = configureStore({
    reducer: {
        captionSlice: captionSliceReducer,
        realTimeDataSlice: realTimeDataSliceReducer,
        languageSlice: languageSliceReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;