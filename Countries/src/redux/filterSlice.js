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
            state.isDark= !state.isDark
        }
    }
})


export const {addSearchData, filterByRegion, changeTheme} = filterSlice.actions

export default filterSlice.reducer