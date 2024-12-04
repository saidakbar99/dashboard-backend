import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    // MongoDB connection
    MongooseModule.forRoot('mongodb+srv://saidakbardev:fGuLTqiQwLHnNHWN@cluster0.nktx6.mongodb.net/'),

    // GraphQL setup with Apollo driver
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql', // automatically generates schema
    }),

    // Import UserModule to handle user-specific functionality
    UserModule,
  ],
})
export class AppModule {}