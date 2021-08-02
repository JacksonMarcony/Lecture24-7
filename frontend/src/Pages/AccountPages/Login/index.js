import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'
import Toast from 'light-toast';


const Login = () => {

    const redirect = useHistory()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    function handleToChangeInput(target) {
        setUser({ ...user, [target.name]: target.value })
    }

    const send = async (e) => {
        e.preventDefault();
        ApiCreate('POST', 'users/login/', user).then(res => {
            localStorage.setItem('token', res.data['token'])
            
            Toast.success('Sucesso', 1500, ()=>{})
            redirect.push('/conta/visualizar')
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
                                Login
                            </div>
                        </h2>
                        <section class="ui large form">
                            <div class="ui stacked segment">
                                
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
                      
                                <div class="ui fluid large teal submit button" onClick={(e) => { send(e) }} >Enviar</div>
                            </div>
                            <div class="ui error message">
                            </div>
                        </section>

                        <div class="ui message">
                            Não tem Conta? <a href="/conta/criar">Cadastro</a>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login;