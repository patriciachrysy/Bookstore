import http from '../http-common';

const createApp = () => {
    return http.post(' /apps/');
}

export default createApp;