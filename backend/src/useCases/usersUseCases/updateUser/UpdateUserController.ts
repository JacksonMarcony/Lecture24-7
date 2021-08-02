import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { name, email } = request.body
        const userEmail = request.jwt

        const updateUserUseCase = new UpdateUserUseCase()
        const user = await updateUserUseCase.execute({
            name,
            email,
            userEmail
        })

        return response.json(user)
    }
}

export { UpdateUserController } 
