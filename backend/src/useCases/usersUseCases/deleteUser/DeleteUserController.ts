import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCases";

class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.query

        const deleteUserUseCase = new DeleteUserUseCase()
        const deletedUser = await deleteUserUseCase.execute({
            id
        })

        return response.json(deletedUser)
    }
}

export { DeleteUserController } 
