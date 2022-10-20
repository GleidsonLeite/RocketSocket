import { ObjectId } from "mongoose";
import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";

@injectable()
class GetChatRoomByUsersService {
  async execute(idUsers: ObjectId[]) {
    return ChatRoom.findOne({
      idUsers: {
        $all: idUsers
      }
    }).exec()
  }
}

export { GetChatRoomByUsersService }