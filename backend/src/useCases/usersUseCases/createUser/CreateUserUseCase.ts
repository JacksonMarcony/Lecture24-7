import knex from '../../../database'
import { hash } from "bcrypt";

interface IRequest {
    name: string;
    lastname: string;
    email: string;
    is_mentor: boolean;
    password: string;
}

class CreateUserUseCase {
    async execute({ name, lastname, email, is_mentor, password }: IRequest) {
        const userAlreadyExists = await knex.raw(`SELECT * FROM users WHERE email = "${email}"`)

        
        if (userAlreadyExists.length > 0) {
            throw new Error('User already exists!')
        }

        const passwordHash = await hash(password, 10)

        await knex.raw(`INSERT INTO users (name, lastname, email, is_mentor, password) values ("${name}", "${lastname}", "${email}", "${is_mentor}", "${passwordHash}")`)
        
        const user = {
            name,
            lastname,
            email,
            is_mentor
        }

        return user
    }
}

export { CreateUserUseCase }