import knex from '../../../database'
import { compare } from "bcrypt";
import { createToken } from '../../../util/createToken';

interface IRequest {
    email: string;
    password: string;
}

class AuthenticateUserUseCase {
    async execute({ email, password }: IRequest) {
        const userAlreadyExists = await knex.raw(`SELECT * FROM users WHERE email = "${email}"`)
        // knex('users').where({ email })

        if (userAlreadyExists.length == 0) {
            throw new Error("User or password incorrect!");
        }

        const passwordMatch = await compare(password, userAlreadyExists[0].password)

        if (!passwordMatch) {
            throw new Error("User or password incorrect!");
        }

        const token = await createToken(userAlreadyExists[0].email)

        return { token }
    }
}

export { AuthenticateUserUseCase }