import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'
import { useParams } from 'react-router-dom'
import Toast from 'light-toast';

const EditClass = () => {
    const redirect = useHistory()
    const {id_class} = useParams()
    const [classes, setClass] = useState({
        id: id_class,
        material_link: '',
        video_url: '',
        name_class: '',
        comment: ''
    })

    function handleToChangeInput(target) {
        setClass({ ...classes, [target.name]: target.value })
    }

    useEffect(() => {
        ApiCreate('GET', `classes?id=${id_class}`).then(result => {
            setClass(result.data)
        })
    }, [])

    const send = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        await ApiCreate('PUT', `classes`, classes, token).then((res) => {
            //
            redirect.push('/aula/todas')

        }).catch(error => {
            Toast.fail('Houve um erro', 1500, ()=>{});
        })
    }
    return (
        <>
            <NavbarComponent />
            <Container text>
                <div class="ui middle aligned center aligned grid">
                    <div class="column">
                        <h2 class="ui teal image header">
                            <div class="content">
                                Editar Aula
                            </div>
                        </h2>
                        <section class="ui large form" style={{textAlign: 'left'}}>
                            <div class="ui stacked segment">
                                <div class="field">
                                    <label>Título</label>
                                    <div class="ui left icon input">
                                        <i class="pencil icon"></i>
                                        <input type="text" name="name_class" value={classes.name_class} onChange={(e) => { handleToChangeInput(e.target) }} placeholder="Título da Aula" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label>Link da Aula </label>
                                    <div class="ui left icon input">
                                        <i class="youtube icon"></i>
                                        <input type="text" name="video_url" value={classes.video_url} onChange={(e) => { handleToChangeInput(e.target) }} placeholder="Link da Aula no YouTube" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label>Descrição da Aula </label>
                                    <div class="ui left icon input">
                                        <i class="book icon"></i>
                                        <input type="text" name="comment" value={classes?.comment} onChange={(e) => { handleToChangeInput(e.target) }} placeholder="Dessa aula vamos falar sobre..." />
                                    </div>
                                </div>
                                <div class="field">
                                <label>Link de Material Complementar(Drive)</label>
                                    <div class="ui left icon input">
                                        <i class="google drive icon"></i>
                                        <input type="text" name="material_link" value={classes.material_link} onChange={(e) => { handleToChangeInput(e.target) }} placeholder="Link(Google Drive) de algum material externo" />
                                    </div>
                                </div>
                                <div class="ui fluid large teal submit button" onClick={(e) => { send(e) }} >Enviar</div>
                            </div>
                            <div class="ui error message">
                            </div>
                        </section>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default EditClass;