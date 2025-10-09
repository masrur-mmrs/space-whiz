import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "languageSlice",
    initialState: { language: "English" },
    reducers: {
        setLanguage(state, action: PayloadAction<Language>) {
            state.language = action.payload;
        }
    }
})

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;