import Ws from '@adonisjs/websocket-client';

export const ws = Ws(`wss://not-twitter-backend.herokuapp.com/:3000`);

export const chat = ws.subscribe('tweet')

