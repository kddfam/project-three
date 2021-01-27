import BackendConfig from "../backend/BackendConfig";

export const fetchPosts = () => {
    return async dispatch => {
        const response = await BackendConfig.get('/posts');
        dispatch({ type: 'FETCH_ALL', payload: response.data })
    }
}