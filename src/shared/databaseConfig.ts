import PGPromise from 'pg-promise';

export const databaseConfig = {
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
};

export const optioned = PGPromise({
  capSQL: true,
});

export const configured = optioned(databaseConfig);
