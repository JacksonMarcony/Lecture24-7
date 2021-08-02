import knex from '../../../database'
import { createToken } from '../../../util/createToken'

interface IRequest {
    name: string;
    email: string;
    userEmail: string;
}

class UpdateUserUseCase {
    async execute({ name, email, userEmail }: IRequest) {

        await knex.raw(`UPDATE users SET name= "${name}", email= "${email}" WHERE email = "${userEmail}"`)
        // await knex('users')
        // .where('email', '=', userEmail)
        // .update({
        //     name,
        //     email
        // })

        const token = await createToken(email)

        const user = {
            name,
            email,
            token
        }

        return user
    }
}

export { UpdateUserUseCase }