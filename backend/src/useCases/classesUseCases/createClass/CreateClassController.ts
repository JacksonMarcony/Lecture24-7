import { Request, Response } from "express";
import { CreateClassUseCase } from "./CreateClassUseCase";

class CreateClassController {
    async handle(request: Request, response: Response) {
        const { name_class, comment, video_url, material_link, user_id } = request.body

        const createClassUseCase = new CreateClassUseCase()
        const classCreated = await createClassUseCase.execute({
            name_class, 
            comment, 
            video_url, 
            material_link, 
            user_id
        })

        return response.json(classCreated)
    }
}

export { CreateClassController } 