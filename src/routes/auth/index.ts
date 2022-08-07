import { Router } from 'express'
import * as controllers from './auth.controllers'
import * as schemas from './auth.schemas'
import { validate } from '../../utils'

export default Router()
  .post('/login', [validate.body(schemas.login)], controllers.login)
  .post('/register', [validate.body(schemas.register)], controllers.register)
