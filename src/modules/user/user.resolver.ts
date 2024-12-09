import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User)
  getUser(@Args('id') id: string): Promise<User> {
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
  removeUser(@Args('id') id: string): Promise<boolean> {
    return this.userService.remove(id).then(() => true);
  }
}