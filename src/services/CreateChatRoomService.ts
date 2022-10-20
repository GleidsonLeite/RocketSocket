import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";

@injectable()
class CreateChatRoomService {
  async execute(idUsers: string[]) {
    return ChatRoom.create({
      idUsers
    })
  }
}

export { CreateChatRoomService }