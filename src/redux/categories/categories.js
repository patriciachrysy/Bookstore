const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = payload => ({type: CHECK_STATUS, payload});

export default categories= (state = initialState, action) => {
    switch (action.type) {
        case CHECK_STATUS:
            return 'Under construction';
        default:
            return state;
    }
}