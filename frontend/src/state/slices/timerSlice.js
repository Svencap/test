import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    // minutes: 2,
    // seconds: 0
    time: 120,
};

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        updateTimer: (state, { payload }) => {
            state.time = payload;
        }
    }
});



// export const getMinutes = (state) => state.minutes;
// export const getSeconds = (state) => state.seconds;
export const { updateTimer } = timerSlice.actions

export default timerSlice.reducer;