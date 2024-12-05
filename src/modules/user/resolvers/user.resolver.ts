import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User)
  getUser(@Args('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  createUser(
    @Args('name') name: string,
    @Args('role') role: string,
    @Args('salary') salary: number,
  ): Promise<User> {
    return this.userService.create({ name, role, salary });
  }

  @Mutation(() => Boolean)
  removeUser(@Args('id') id: number): Promise<boolean> {
    return this.userService.remove(id).then(() => true);
  }
}