// entity for auth module

import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/entity/base.entity';
// import { BaseEntity } from 'src/entity/BaseEntity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class AuthEntity extends BaseEntity {
  constructor(partial: Partial<AuthEntity>) {
    super();
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  @Exclude()
  password: string;
}
// @Exclude()
// password: string;

// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { CoreEntity } from './core.entity';  // Adjust the import path accordingly

// @Entity('users')
// export class User extends CoreEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: 'varchar', length: 50, nullable: false })
//   username: string;

//   @Column({ type: 'varchar', length: 50, nullable: false })
//   password: string;

//   @Column({ type: 'varchar', length: 100, nullable: true })
//   email: string;
// }
