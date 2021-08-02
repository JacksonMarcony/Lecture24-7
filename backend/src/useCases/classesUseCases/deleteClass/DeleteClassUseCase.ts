import knex from '../../../database'

class DeleteClassUseCase {
    async execute({ id }) {

        await knex.raw(`DELETE FROM classes WHERE id = "${id}"`)

        const deletedClass = {
            'response': 'Class deleted with success'
        }

        return deletedClass
    }
}

export { DeleteClassUseCase }