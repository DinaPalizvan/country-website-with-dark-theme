import { createSlice } from "@reduxjs/toolkit";

const filterSlice= createSlice({
    name: "filter Countries",
    initialState: {
        searchData:"",
        region:"",
        isDark: false
    },
    reducers:{
        addSearchData: (state, action)=>{
            state.searchData= action.payload
        },
        filterByRegion: (state, action)=>{
            state.region= action.payload
        },
        changeTheme:(state)=>{
            !state.isDark
        }
    }
})
console.log(filterSlice);

export const {addSearchData, filterByRegionr} = filterSlice.actions

export default filterSlice.reducer