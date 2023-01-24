import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from '../../config/constants'
import { removeCredentials, tokenUpdated } from '../redux/slices/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  credentials: 'include',
})

const baseQueryWithReauth: typeof baseQuery = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: '/refresh-token-url',
        method: 'GET',
      },
      api,
      extraOptions,
    )

    if (refreshResult.data) {
      api.dispatch(tokenUpdated())
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(removeCredentials())
      api.util.resetApiState()
    }
  }
  return result
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Auth'],

  endpoints: () => ({}),
})
