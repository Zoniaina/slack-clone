import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      // debug: false,
      // playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // sortSchema: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
