import React, { Component } from 'react';
import { FaTwitter } from 'react-icons/fa'

import { ws, chat } from '../../backend/ws';
import api from '../../backend/api';
import Tweet from '../../components/tweets';

import { Container, NewTweet, Twittar } from './style';

export default class TimeLine extends Component {
    
    state = {
        me: null,
        newTweet: '',
        tweets: []

    }

    async componentDidMount() {
        const me = await localStorage.getItem('username')
        this.setState({me})
        this.getTweets()
        
        ws.connect()
        this.watchWs()
    }

    getTweets = async () => {
        const response = await api.get('tweet')
        this.setState({ tweets: response.data })
    }

    watchWs = () => {
        chat.on('tweet', (tweet) => {
            this.setState({ tweets: [ tweet, ...this.state.tweets ] })
          })
    }

    handleNewTweet = e => {
        if(e.target.value.length > 240) return

        this.setState({ newTweet: e.target.value })

    }

    twittar = async () => {
        await api.post('tweet', {
            user: this.state.me,
            content: this.state.newTweet
        })

        chat.emit('tweet', {
            user: this.state.me,
            content: this.state.newTweet
        })

        this.setState({ newTweet: '' })
    }
    
    render() {
        return(
            <Container>
                <FaTwitter color='#00acee' size={40} style={{margin: 40}}/>
                <NewTweet
                    value = {this.state.newTweet} 
                    onChange = {this.handleNewTweet}
                    placeholder = 'O que está acontecendo?' 
                />
                <Twittar onClick={this.twittar}><p>Twittar</p></Twittar>

                <ul>
                    {this.state.tweets.map(tweet => (
                        <li>{<Tweet about={tweet} />}</li>
                    ))}
                </ul>
            </Container>
        )
    }
}