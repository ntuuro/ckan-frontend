export interface LoginRequest {
  username: string
  password: string
}

export interface UserResponse {
  token: string
  payload: any
  refreshToken: string
  message: string
}

export interface LogoutResponse {
  statusCode: number
  message: string
  payload: any
}
