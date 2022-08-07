import 'dotenv/config'
import run from './main'

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string
        role: string
      }
    }
  }
}

run()
