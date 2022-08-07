import { RequestHandler } from 'express'

export const getUsers: RequestHandler = (_rq, rs) => {
  return rs.send('Get Users')
}

export const getUser: RequestHandler = (rq, rs) => {
  const id = rq.params.id
  return rs.send(`Get User ${id}`)
}

export const createUser: RequestHandler = (rq, rs) => {
  const data = rq.body
  return rs.send(`Create User with ${JSON.stringify(data)}`)
}

export const updateUser: RequestHandler = (rq, rs) => {
  const id = rq.params.id
  const data = rq.body
  return rs.send(`Update User ${id} with ${JSON.stringify(data)}`)
}

export const deleteUser: RequestHandler = (rq, rs) => {
  const id = rq.params.id
  return rs.send(`Delete User ${id}`)
}
