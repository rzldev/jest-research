import { createServer } from 'miragejs'
import API from '../constants/api'
import { IUser } from '../@types/models'

// const server = setupServer(...handlers);

const mockServer = (environment = 'test') => {
  return createServer({
    environment: environment,
    routes() {
      this.urlPrefix = API.API_ROUTE
      this.get(API.USERS_ENDPOINT, () => {
        const users: IUser[] = [
          {
            name: 'Bruce Wayne',
          },
          {
            name: 'Clark Kent',
          },
          {
            name: 'Princess Diana',
          },
        ]
        return users
      })
    },
  })
}

export default mockServer
