import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const captionSlice = createSlice({
    name: "caption",
    initialState: { currentState: true },
    reducers: {
        setCaption(state, action: PayloadAction<boolean>) {
            state.currentState = action.payload;
        }
    }
});

export const { setCaption } = captionSlice.actions;
export default captionSlice.reducer;