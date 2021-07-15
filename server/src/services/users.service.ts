import bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { CreateUserDto } from '@dtos/users.dto';
import { UserEntity } from '@entity/users.entity';
import HttpException from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { isEmpty } from '@utils/util';

class UserService {
  public userRepository = getRepository(UserEntity);

  public async findAllUser(): Promise<User[]> {
    const users: User[] = await this.userRepository.find();
    return users;
  }

  public async findUserById(userId: number): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: User = await this.userRepository.findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  findOrCreate(userPayload: Partial<User>) {
    throw new Error('Method not implemented.');
  }

  public async findUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.userRepository.findOne({ where: { email: userData.email } });
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const salt = await bcrypt.genSalt();
    const createUserData: User = await this.userRepository.save({ ...userData, password: hashedPassword, salt });

    return createUserData;
  }

  public async updateUser(userId: number, userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.userRepository.findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "You're not user");

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    await this.userRepository.update(userId, { ...userData, password: hashedPassword });

    const updateUser: User = await this.userRepository.findOne({ where: { id: userId } });
    return updateUser;
  }

  public async deleteUser(userId: number): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: User = await this.userRepository.findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "You're not user");

    await this.userRepository.delete({ id: userId });
    return findUser;
  }
}

export default UserService;
