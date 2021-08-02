import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


export default class NavbarComponent extends Component {
    state = {}

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })

    }

    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable>
                <Link to="/">
                    <Menu.Item>
                        <img src='https://icon-library.com/images/icon-logo-png/icon-logo-png-11.jpg' />
                    </Menu.Item>
                </Link>

                <Menu.Item
                    name='aulas'
                    onClick={this.handleItemClick}
                    active={activeItem === 'aulas'}>
                    <Link to="/aula/todas">
                        Aulas
                    </Link>
                </Menu.Item>

                <Menu.Item
                    name='profile'
                    active={activeItem === 'profile'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/conta/visualizar">
                        Perfil
                    </Link>
                </Menu.Item>

                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}
                >
                     <Link to="/conta/login">
                        Login
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}