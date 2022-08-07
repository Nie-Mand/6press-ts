import { connect } from 'mongoose'

export const connectToDb = () => {
  return connect(process.env.DB || '')
    .then(() => {
      console.log('MongoDB Connected')
    })
    .catch(err => {
      console.log(err)
    })
}
