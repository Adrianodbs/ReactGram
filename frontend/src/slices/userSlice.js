import { createSlice, creatAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  error: false,
  success: false,
  loading: false,
  message: null
}

//funcoes

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetMessage: state => {
      state.message = null
    }
  }
})

export const { resetMessage } = userSlice.actions
export default userSlice.reducer
