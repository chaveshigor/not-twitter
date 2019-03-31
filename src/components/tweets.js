import React, { Component } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';

import { Container, UserName, Content, Like } from './style';
import api from '../backend/api';

export default class Tweet extends Component {

    state = {
        likes: this.props.about.likes
    }

    like = async(id) => {
        await api.post(`like/${id}`)
        this.setState({ likes: this.state.likes + 1 })
    }
    
    
    render() {

        const { about } = this.props

        return(
            <Container>
                <UserName>{about.user}</UserName>
                <Content>{about.content}</Content>
                <Like onClick={()=>this.like(about.id)}>
                    <IoMdHeartEmpty size={24}/>
                    <p>{this.state.likes}</p>
                </Like>
                <div/>
            </Container>
        )
    }
}