import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('name').notNullable()
        table.string('lastname').notNullable()
        table.string('email').unique().notNullable()
        table.boolean('is_mentor').notNullable()
        table.string('password').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users')
}
