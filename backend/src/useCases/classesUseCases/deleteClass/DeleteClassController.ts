import { Request, Response } from "express";
import { DeleteClassUseCase } from "./DeleteClassUseCase";

class DeleteClassController {
    async handle(request: Request, response: Response) {
        const { id } = request.query

        const deleteClassUseCase = new DeleteClassUseCase()
        const deletedClass = await deleteClassUseCase.execute({
            id
        })

        return response.json(deletedClass)
    }
}

export { DeleteClassController } 
