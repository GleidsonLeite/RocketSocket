import { User } from "../schemas/User";

interface CreateUserDTO {
  email: string;
  socket_id: string;
  avatar: string;
  name: string;
}

class CreateUserService {
  async execute({ avatar, email, name, socket_id }:CreateUserDTO) {
    const foundUser = await User.findOne({
      email
    }).exec();

    if (foundUser) {
      const user = await User.findOneAndUpdate(
        {
         _id: foundUser._id
        },
        {
          $set: {
            socket_id,
            avatar,
            name
          }
        }
      )

      return user
    }

    return User.create({
      email,
      socket_id,
      avatar,
      name
    })
  }
}

export { CreateUserService }