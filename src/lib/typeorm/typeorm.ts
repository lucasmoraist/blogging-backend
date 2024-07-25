import { Post } from '@/entities/post.entity';
import { Teacher } from '@/entities/teacher.entity';
import { User } from '@/entities/user.entity';
import { env } from '@/env';
import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Post, Teacher, User],
  logging: env.NODE_ENV === 'development',
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
});

appDataSource
  .initialize()
  .then(() => {
    console.log('Database with TypeORM connected');
  })
  .catch((e) => {
    console.error('Error connecting to database with TypeORM', e);
  });
