import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        loaded: false,
        user: {},
        ual: {}
    },
    reducers: {
        setLoaded: (state) => {
            state.loaded = true
        },
        setUnloaded: (state) => {
            state.loaded = false
        },
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload
        },
    },
})

export const { setLoaded, setUnloaded, setUser } = appSlice.actions

export default appSlice.reducer