import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const realTimeDataSlice = createSlice({
    name: "realTimeData",
    initialState: { currentState: true },
    reducers: {
        setRealTimeData(state, action: PayloadAction<boolean>) {
            state.currentState = action.payload;
        }
    }
});

export const { setRealTimeData } = realTimeDataSlice.actions;
export default realTimeDataSlice.reducer;