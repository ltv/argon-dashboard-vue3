export interface AuthState {
  isAuthenticated: boolean
  user?: any
}

export type ILogin = {
  email: string
  password: string
}
