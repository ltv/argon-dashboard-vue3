export interface AuthState {
  isAuthenticated: boolean
  user?: any
}

export type ILogin = {
  username: string
  password: string
}
