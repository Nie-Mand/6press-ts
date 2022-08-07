import { RequestHandler } from 'express'
import * as services from './auth.services'

export const login: RequestHandler = async (rq, rs) => {
  const data = rq.body
  const { token, error } = await services.login(data.email, data.password)
  if (error) {
    rs.status(400).json({ error })
  } else {
    rs.status(200).json({ token })
  }
}

export const register: RequestHandler = async (rq, rs) => {
  const data = rq.body
  const user = await services.register(data)
  return rs.status(200).json(user)
}
