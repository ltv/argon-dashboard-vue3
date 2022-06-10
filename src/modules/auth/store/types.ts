export interface AuthState {
  isAuthenticated: boolean
  isLoginPage: boolean
  user?: any
}

export type ILogin = {
  username: string
  password: string
}
