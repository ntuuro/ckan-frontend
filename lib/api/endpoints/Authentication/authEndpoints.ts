import { LoginRequest, LogoutResponse, UserResponse } from '../../../types/auth'
import { api } from '../../api'

const authEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    // AUTH
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/login_endpoint_url',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation<LogoutResponse, void>({
      query: () => ({
        url: '/logout_endpoint_url',
        method: 'POST',
      }),
    }),
  }),
})

export const {
  // AUTH
  useLoginMutation,
  useLogoutMutation,
} = authEndpoints
