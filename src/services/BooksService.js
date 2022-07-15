import http from '../http-common';

const getAll = appId => {
    return http.get(`/apps/${appId}/books`);
}

const create = (appId, data) => {
    return http.post(`/apps/${appId}/books`, data);
}

const remove = (appId, id) => {
    return http.delete(`/apps/${appId}/books/${id}`);
}

const BooksService = {
    getAll,
    create,
    remove
}

export default BooksService;