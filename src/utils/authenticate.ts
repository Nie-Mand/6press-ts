import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'

export function authenticate(...roles: string[]): RequestHandler {
  return (rq, rs, nxt) => {
    const token = rq.headers.authorization
    if (!token) {
      return rs.status(401).send('Unauthorized')
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      rq.user = decoded
    } catch {
      return rs.status(401).send('Unauthorized')
    }

    if (roles.length && !roles.includes(rq.user.role)) {
      return rs.status(403).send('Forbidden')
    }

    nxt()
  }
}
