import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './project.entity';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => [Project])
  async getProjects(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Mutation(() => Project)
  async createProject(
    @Args('name') name: string,
    @Args('description') description: string,
    @Args('income_amount') income_amount: number,
  ): Promise<Project> {
    return this.projectService.create({ name, description, income_amount });
  }
}