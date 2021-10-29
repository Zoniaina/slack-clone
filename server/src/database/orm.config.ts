export const ormConfig: any = () => {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'root',
    database: 'slack_clone',
    // entities: ['dist/**/*.entity{.ts,.js}'],
    entities: [__dirname + '/../core/**/entities/*.entity{.ts,.js}'],
    synchronize: true,
  };
};
