import knex from '../../../database'

interface IRequest {
    name_class: string;
    comment: string;
    video_url: string;
    material_link: string;
    user_id: number;
}

class CreateClassUseCase {
    async execute({ name_class, comment, video_url, material_link, user_id }: IRequest) {

        await knex.raw(`INSERT INTO classes (name_class, comment, video_url, material_link, user_id) values ("${name_class}", "${comment}", "${video_url}", "${material_link}", "${user_id}")`)

        const classCreated = {
            name_class, 
            comment, 
            video_url, 
            material_link,
            user_id
        }

        return classCreated
    }
}

export { CreateClassUseCase }