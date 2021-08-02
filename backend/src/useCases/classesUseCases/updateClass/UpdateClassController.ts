import { Request, Response } from "express";
import { UpdateClassUseCase } from "./UpdateClassUseCase";

class UpdateClassController {
    async handle(request: Request, response: Response) {
        const { name_class, comment, video_url, material_link, id } = request.body

        const updateClassUseCase = new UpdateClassUseCase()
        const updatedClass = await updateClassUseCase.execute({
            name_class, 
            comment, 
            video_url, 
            material_link,
            id
        })

        return response.json(updatedClass)
    }
}

export { UpdateClassController } 
