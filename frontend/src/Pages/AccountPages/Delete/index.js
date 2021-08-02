import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'
import Toast from 'light-toast';

const DeleteAccount = () => {
    const redirect = useHistory()

    const send = (e) => {
        e.preventDefault()
        const account_id = localStorage.getItem('user_id')
        const token = localStorage.getItem('token')

        ApiCreate('DELETE', `users?id=${account_id}`, '' ,token).then((res) => {
            Toast.success('Sucesso', 1500, ()=>{});
            localStorage.removeItem('token')
            localStorage.removeItem('user_id')
            redirect.push('/aula/todas')
        }).catch(error => {
            Toast.fail('Houve um erro', 1500, ()=>{});
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
                                Deletar Conta
                            </div>
                        </h2>
                        <section class="ui large form">
                            <div class="ui stacked segment">
                                <div class="header">
                                    Realmente deseja excluir usuário?
                                </div>
                                <div class="ui divider"></div>
                                <button class="fluid  negative ui button" onClick={(e)=>{send(e)}}>Enviar</button>
                            </div>
                            <div class="ui error message"></div>
                        </section>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default DeleteAccount;