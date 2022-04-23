
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// apiCall
export const getList = createAsyncThunk('list/getData', async () => {
  const res = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json').then(
    data=>data.json()
  )
  return res
})

export const listSlice = createSlice({
  name: 'lists',
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
    builder.addCase(getList.fulfilled, (state, action) => {
      // Add user to the state array
      state.value=action.payload
    })
  }
})

export const {setValue } = listSlice.actions

export default listSlice.reducer