import { Router } from 'express'
import users from './users'
import auth from './auth'

export default Router()
    .use('/users', users)
    .use('/auth', auth)
