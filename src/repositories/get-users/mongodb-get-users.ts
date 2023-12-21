import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Igor",
        lastName: "Aleixo",
        email: "igor@gmail.com",
        password: "123",
      },
    ];
  }
}
