import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Channel } from '../../channels/entities/channel.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
@ObjectType()
export class Workspace {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToOne(() => User, (owner) => owner.workspaces)
  @Field((type) => User)
  owner: User;

  @OneToMany(() => Channel, (channel) => channel.workspace)
  @Field((type) => [Channel], { nullable: true })
  channels: Channel[];

  @ManyToMany(() => User)
  @Field((type) => [User])
  @JoinTable()
  members: User[];
}
