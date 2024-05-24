import { DataSourceOptions } from 'typeorm';
export const getDataSourceProvider = (): DataSourceOptions => ({
  type: 'sqlite',
  database: process.env.DATABASE,
  synchronize: process.env.NODE_ENV === 'development' ? true : false,
  entities: [__dirname + '../../../../**/*.entity{.ts,.js}'],
  migrations: ['../../../migrations'],
});
