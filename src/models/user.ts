import mongoose, { Model, Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt'

interface IUser {
  fullname: string
  email: string
  password: string
  role: string
}

interface IUserDocument extends IUser, Document {
  verifyPassword(password: string): boolean
}

interface IUserModel extends Model<IUserDocument> {
  findByEmail(email: string): Promise<IUserDocument>
}

const user = new Schema<IUserDocument>(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: 'user',
    },
  },
  { timestamps: true }
)

user.methods.verifyPassword = async function (password: string) {
  const isValid = await bcrypt.compare(password, this.password)
  return isValid
}

user.statics.findByEmail = function (email: string) {
  return this.findOne({ email })
}

user.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

export default mongoose.model<IUserDocument, IUserModel>('User', user)
