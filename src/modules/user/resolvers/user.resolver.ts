import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { CreateUserInput } from '../dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getUsers() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }
}