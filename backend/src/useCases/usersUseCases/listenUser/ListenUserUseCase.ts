import knex from '../../../database'

class ListenUserUseCase{
    async execute({ email }) {
        const user = await knex.raw(`SELECT id, name, lastname, email, is_mentor FROM users WHERE email = "${email}"`)
        // .select('id', 'name', 'email').where({email})

        if (user.length < 1) {
            throw new Error('No user found')
        }
        return user[0]
    }
}

export { ListenUserUseCase }