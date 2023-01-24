import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
  refreshToken: string | undefined
  user: any
}

const slice = createSlice({
  name: 'auth',
  initialState: {
    refreshToken: undefined,
    user: undefined,
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { refreshToken, user } }: PayloadAction<{ refreshToken: string; user: any }>,
    ) => {
      state.refreshToken = refreshToken
      localStorage.setItem('RefreshToken', refreshToken)
      localStorage.setItem('User', JSON.stringify(user))
    },
    tokenUpdated: (state) => {
      return state
    },

    removeCredentials: (state) => {
      state.refreshToken = undefined
      localStorage.removeItem('RefreshToken')
      localStorage.removeItem('User')
    },
  },
})

export const { setCredentials, tokenUpdated, removeCredentials } = slice.actions
export default slice.reducer
