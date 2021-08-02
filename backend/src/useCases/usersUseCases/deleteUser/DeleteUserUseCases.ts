import knex from '../../../database'

class DeleteUserUseCase {
    async execute({ id }) {

        await knex.raw(`DELETE FROM users WHERE id = "${id}"`)

        const deletedUser = {
            'response': 'User deleted with success'
        }

        return deletedUser
    }
}

export { DeleteUserUseCase }