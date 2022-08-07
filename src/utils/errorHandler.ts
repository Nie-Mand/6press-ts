import { ErrorRequestHandler } from 'express'

export const errorHandler: ErrorRequestHandler = (err, _rq, rs, _nxt) => {
  console.error(err)
  rs.status(500).send('Something went wrong')
}
