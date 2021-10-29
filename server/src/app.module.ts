import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './core/users/users.module';
import { MessagesModule } from './core/messages/messages.module';
import { ChannelsModule } from './core/channels/channels.module';
import { WorkspacesModule } from './core/workspaces/workspaces.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './database/orm.config';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema/schema.gql'),
      sortSchema: true,
      subscriptions: {
        'graphql-ws': true,
      },
    }),
    TypeOrmModule.forRoot(ormConfig()),
    UsersModule,
    MessagesModule,
    ChannelsModule,
    WorkspacesModule,
  ],
})
export class AppModule {}
