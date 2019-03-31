import Ws from '@adonisjs/websocket-client';

export const ws = Ws(`wss://not-twitter-backend.herokuapp.com/`);

export const chat = ws.subscribe('tweet')

