import { openErrorNotification } from './Notification'
import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const errorDescription = error.response && error.response.data ? ( error.response.data.message || '') : '';

    if (error.response && error.response.status === 401) {
        openErrorNotification('Authorization Failed', errorDescription)
    } else {
        openErrorNotification('An Error occurred.', errorDescription)
    }
    return Promise.reject(error);
});