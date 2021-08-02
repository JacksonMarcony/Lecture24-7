import knex from '../../../database'

class ListenClassUseCase{
    async execute({ id }) {
        if (id) {
            const classDatas = await knex.raw(`SELECT * FROM classes WHERE id = "${id}"`)
            if (classDatas.length < 1) {
                throw new Error('No class found')
            }

            return classDatas[0]
        }

        const classDatas = await knex.raw(`SELECT * FROM classes`)
        console.log(classDatas)
        if (classDatas.length < 1) {
            throw new Error('No classes found')
        }

        console.log(classDatas)
        return classDatas
    }
}

export { ListenClassUseCase }