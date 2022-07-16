import http from '../http-common';

const getAll = (appId) => http.get(`/apps/${appId}/books`);

const create = (appId, data) => http.post(`/apps/${appId}/books`, data);

const remove = (appId, id) => http.delete(`/apps/${appId}/books/${id}`);

const BooksService = {
  getAll,
  create,
  remove,
};

export default BooksService;
