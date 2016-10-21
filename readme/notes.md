SETPS:

- DATABASE SET UP

  pgstart => starts the PostgreSQL
  psql => starts the database
  \l => list all the databases
  \c <dbName> => switch the database
  dbcreate <dbName> => creates the database

  \i <xyz.sql> => connects the sql file with the database
  psql -d <dbName> -f <full path of the .sql file> => connects the sql file with the database



RESTFUL ROUTES API:

(/api/employers)
(/api/employers/:id)

PGUSER=eminekoc PGPWD=1297 heroku pg:push apex DATABASE_URL --app heroku apex-project
