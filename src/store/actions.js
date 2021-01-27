import _ from 'lodash';
import BackendConfig from "../backend/BackendConfig";

export const fetchPosts = () => {
    return async dispatch => {
        const response = await BackendConfig.get('/posts');
        dispatch({ type: 'FETCH_ALL', payload: response.data });
    }
}

export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await BackendConfig.get(`/users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: response.data });
})