import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('classes', table => {
        table.increments('id')
        table.string('name_class').notNullable()
        table.string('comment')
        table.string('video_url').unique().notNullable()
        table.boolean('material_link')
        table.boolean('is_watched').defaultTo(false)
        table.timestamp('created_at').defaultTo(knex.fn.now())

        table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('classes')
}
