import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/users.schema';
import { createUserDto } from './dto/createUserDto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(username: string, password: string): Promise<createUserDto> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ username, password: hashedPassword });
    const savedUser = await newUser.save();
    const result = savedUser.toObject();
    return {
      username: result.username,
      id: result._id.toString(),
      message: 'User Create successfully',
    };
  }

  async userFindById(id: string): Promise<createUserDto> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('');
    }
    const userFound = user.toObject();
    return {
      username: userFound.username,
      id: userFound._id.toString(),
      message: 'User found successfully',
    };
  }
  async FindByUsername(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username }).exec();
  }
  async getAllUsers() {
    const users = await this.userModel.find().select('username _id'); // انتخاب فقط username و _id
    return users.map((user) => ({
      id: user._id.toString(), // تبدیل _id به رشته
      username: user.username,
    }));
  }

  async deleteUser(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
