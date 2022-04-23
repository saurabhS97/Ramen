
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// apiCall
export const getPicList = createAsyncThunk('pics/getData', async () => {
  const res = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json').then(
    data=>data.json()
  )
  return res
})

export const picSlice = createSlice({
  name: 'picsList',
  initialState: {
    value: []
  },
  reducers: {
    setValue: (state, action) => {
      state.value =action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getPicList.fulfilled, (state, action) => {
      // Add user to the state array
      state.value=action.payload
    })
  }
})

export const {setValue } = picSlice.actions

export default picSlice.reducer