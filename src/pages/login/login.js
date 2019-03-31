import React, { Component } from 'react';
import { FaTwitter } from 'react-icons/fa'

import { Container, Form, Input, Button } from './style';

export default class Login extends Component {
    
    state = {
        name: ''
    }

    handleName = e => {
        this.setState({ name: e.target.value })
    }

    handleLogin = () => {
        if(this.state.name.length !== 0) {
            localStorage.setItem('username', this.state.name)
            this.props.history.push('/timeline')
        }
    }
    
    render() {
        return(
            <Container>
                <FaTwitter color='#00acee' size={70} style={{margin: 40}}/>
                <Form>
                    <Input 
                        value = {this.state.name}
                        onChange = {this.handleName}
                        placeholder = 'Digite seu nome'/>
                    <Button onClick = {this.handleLogin}><p>ENTRAR</p></Button>
                </Form>
            </Container>
        )
    }
}