import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, lastname, email, is_mentor, password } = request.body

        const createUserUseCase = new CreateUserUseCase()
        const user = await createUserUseCase.execute({
            name,
            lastname,
            email, 
            is_mentor,
            password
        })

        return response.json(user)
    }
}

export { CreateUserController } 