import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';

@Entity()
@ObjectType()
export class Channel {
  @PrimaryGeneratedColumn('uuid')
  @Field((type) => String)
  id: string;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Workspace, (workspace) => workspace.channels)
  @Field((type) => Workspace)
  workspace: Workspace;
}
