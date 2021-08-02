// Update with your config settings.

export = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: `C:/Users/Jackson/Desktop/002-lecture/backend/src/database/dev.sqlite3`
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `C:/Users/Jackson/Desktop/002-lecture/backend/src/database/migrations`
    },
    seeds: {
      directory: `C:/Users/Jackson/Desktop/002-lecture/backend/src/database/seeds`
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
