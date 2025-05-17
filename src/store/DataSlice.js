import { createSlice } from "@reduxjs/toolkit";
// import actions

const initialState = {

}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase('fetchData/pending', (state) => {
        //         state.loading = true;
        //     })
        //     .addCase('fetchData/fulfilled', (state, action) => {
        //         state.data = action.payload;
        //         state.loading = false;
        //     })
        //     .addCase('fetchData/rejected', (state) => {
        //         state.loading = false;
        //     });
    
    
    
    
}
});

export default dataSlice.reducer;