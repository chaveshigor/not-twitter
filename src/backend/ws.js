import Ws from '@adonisjs/websocket-client';

export const ws = Ws('ws://192.168.0.106:3333');

export const chat = ws.subscribe('tweet')

