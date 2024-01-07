import http from './http'
import TokenService from './token.service'

class AuthService {
  async login(username: string, password: string) {
    return http
      .post('/api/v1/auth/signin', {
        username,
        password
      })
      .then((response) => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data)
        }

        return response.data
      })
  }
}

export default new AuthService()
