import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from '../../messages/entities/message.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @OneToMany(() => Message, (message) => message.user, { nullable: true })
  @Field((type) => [Message], { nullable: true })
  messages: Message[];

  @OneToMany(() => Workspace, (workspace) => workspace.owner)
  @Field((type) => [Workspace], { nullable: true })
  workspaces: Workspace[];
}
