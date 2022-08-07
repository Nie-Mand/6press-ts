import { Router } from 'express'
import * as controllers from './users.controllers'
import { authenticate } from '../../utils'
export default Router()
  .get('/', [authenticate()], controllers.getUsers)
  .get('/:id', [authenticate()], controllers.getUser)
  .post('/', [authenticate('user', 'admin')], controllers.createUser)
  .put('/:id', [authenticate('admin')], controllers.updateUser)
  .delete('/:id', [authenticate('admin')], controllers.deleteUser)
