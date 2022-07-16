import http from '../http-common';

const createApp = () => http.post('/apps/');

export default createApp;
