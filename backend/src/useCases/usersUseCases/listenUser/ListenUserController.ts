import { Request, Response } from "express";
import { ListenUserUseCase } from "./ListenUserUseCase"

class ListenUserController {
    async handle(request: Request, response: Response) {
        const email = request.jwt

        const listenUserUseCase = new ListenUserUseCase()
        const user = await listenUserUseCase.execute({
            email
        })

        return response.json(user)
    }
}

export { ListenUserController }