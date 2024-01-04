import { HttpResponse, http } from 'msw'
import API from '../constants/api'

const handlers = [
  http.get(API.API_ROUTE + API.USERS_ENDPOINT, () =>
    HttpResponse.json([
      {
        name: 'Bruce Wayne',
      },
      {
        name: 'Clark Kent',
      },
      {
        name: 'Princess Diana',
      },
    ]),
  ),
]

export default handlers
