import { Request, Response } from "express";
import { ListenClassUseCase } from "./ListenClassUseCase"

class ListenClassController {
    async handle(request: Request, response: Response) {
        const { id } = request.query

        const listenClassUseCase = new ListenClassUseCase()
        const classes = await listenClassUseCase.execute({
            id
        })

        return response.json(classes)
    }
}

export { ListenClassController }