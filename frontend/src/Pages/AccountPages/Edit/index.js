import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'
import Toast from 'light-toast';


const EditAccount = () => {
    const redirect = useHistory()
    const [isMentor, setIsMentor] = useState(false)

    const [user, setUser] = useState({
        id: null,
        name: 'ruan',
        lastname: 'pablo',
        email: 'ruan@gmail.com',
        is_mentor: isMentor
    })

    function handleToChangeInput(target) {
        setUser({ ...user, [target.name]: target.value })
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) {
            redirect.push('/conta/login')
        }

        ApiCreate('GET', 'users', {} , token).then(result => {
            localStorage.setItem('user_id', result.data.id)
            setUser(result.data)
        })
    }, [])

    const send = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')

        await ApiCreate('PUT', 'users/', user, token).then((res) => {
            Toast.success('Sucesso', 1500, ()=>{});
           
        }).catch(error => {
            Toast.fail('Houve um erro', 1500, () => { });
            //
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
                                Edit Conta
                            </div>
                        </h2>
                        <section class="ui large form">
                            <div class="ui stacked segment">
                                <div class="two fields">
                                    <div class="field">
                                        <div class="ui left icon input">
                                            <i class="user icon"></i>
                                            <input type="text" name="name" value={user.name} onChange={(e) => { handleToChangeInput(e.target) }} placeholder="Primeiro Nome" />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="ui left icon input">
                                            <i class="user icon"></i>
                                            <input type="text" name="lastname" value={user.lastname} onChange={(e) => { handleToChangeInput(e.target) }} placeholder="Segundo Nome" />
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui left icon input">
                                        <i class="mail icon"></i>

                                        <input type="text" name="email" value={user.email} onChange={(e) => { handleToChangeInput(e.target) }} placeholder="E-mail address" />
                                    </div>
                                </div>

                                <div class="inline one field" style={{ textAlign: 'left' }}>
                                    <div class="ui checkbox">
                                        <input type="checkbox" tabindex="0" name="is_mentor" value={user?.is_mentor} onChange={e => setIsMentor(e.target.checked)} />
                                        <label>Mentor</label>
                                    </div>
                                </div>
                                <div class="ui fluid large teal submit button" onClick={(e) => { send(e) }} >Enviar</div>
                            </div>
                            <div class="ui message">
                                Recuperar senha? <a href="#">Recuperar</a>
                            </div>
                        </section>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default EditAccount;