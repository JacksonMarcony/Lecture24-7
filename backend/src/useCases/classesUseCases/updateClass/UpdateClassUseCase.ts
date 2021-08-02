import knex from '../../../database'

interface IRequest {
    id: number;
    name_class: string;
    comment: string;
    video_url: string;
    material_link: string;
}

class UpdateClassUseCase {
    async execute({ name_class, comment, video_url, material_link, id }: IRequest) {

        await knex.raw(`UPDATE classes SET name_class= "${name_class}", comment= "${comment}", video_url= "${video_url}", material_link= "${material_link}" WHERE id = "${id}"`)


        const updatedClass = {
            name_class, 
            comment, 
            video_url, 
            material_link
        }

        return updatedClass
    }
}

export { UpdateClassUseCase }