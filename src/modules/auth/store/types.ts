export interface AuthState {
  isAuthenticated: boolean
  isLoginPage: boolean
  user?: any
}

export type ILogin = {
  email: string
  password: string
}
