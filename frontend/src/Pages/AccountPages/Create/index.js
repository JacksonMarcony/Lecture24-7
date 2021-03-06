import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'
import Toast from 'light-toast';


const CreateAccount = () => {
    const [isMentor, setIsMentor] = useState(false)

    const redirect = useHistory()

    const [user, setUser] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
        is_mentor: isMentor
    })

    function handleToChangeInput(target) {
        setUser({ ...user, [target.name]: target.value })
    }

    const send = async (e) => {
        e.preventDefault();

        const { password, password2 } = user

        if (password === password2) {
            ApiCreate('POST', 'users/', user).then(res => {
                Toast.success('Sucesso', 1500, ()=>{});
         
                redirect.push('/conta/login')
            }).catch(error => {
                           
                Toast.fail('Houve um erro', 1500, ()=>{});
            })
        } else {
            Toast.fail('Houve um erro', 1500, ()=>{});
        }
    }


    return (
        <>
            <NavbarComponent />
            <Container text>
                <div class="ui middle aligned center aligned grid">
                    <div class="column">
                        <h2 class="ui teal image header">
                            <div class="content">
                                Criar Conta
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
                                <div class="field">
                                    <div class="ui left icon input">
                                        <i class="lock icon"></i>
                                        <input type="password" name="password" value={user.password} onChange={(e) => { handleToChangeInput(e.target) }} placeholder="Password" />
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui left icon input">
                                        <i class="lock icon"></i>
                                        <input type="password" name="password2" value={user.password2} onChange={(e) => { handleToChangeInput(e.target) }} placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <div class="inline one field" style={{ textAlign: 'left' }}>
                                    <div class="ui checkbox">
                                        <input type="checkbox" tabindex="0" name="is_mentor" value={user.is_mentor} onChange={e => setIsMentor(e.target.checked)} />
                                        <label>Mentor</label>
                                    </div>
                                </div>
                                <div class="ui fluid large teal submit button" onClick={(e) => { send(e) }} >Enviar</div>
                            </div>
                            <div class="ui error message">
                            </div>
                        </section>

                        <div class="ui message">
                            J?? tem Conta? <a href="#">Login</a>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CreateAccount;