import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    const createdUser = this.userModel.create(createUserDto);
    return createdUser;
  }

  findAll() {
    const findedUsers = this.userModel.find();
    return findedUsers;
  }

  findOne(id: string) {
    const findedUser = this.userModel.findById(id);
    return findedUser;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = this.userModel.findByIdAndUpdate(
      id,
      {
        name: updateUserDto.name,
        age: updateUserDto.age,
        email: updateUserDto.email,
      },
      { new: true },
    );

    return updatedUser;
  }

  remove(id: string) {
    const deletedUser = this.userModel.findByIdAndDelete(id);

    return deletedUser;
  }
}
